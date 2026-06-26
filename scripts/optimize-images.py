"""
optimize-images.py
Adiciona loading="lazy", width, height e decoding="async" em todas as tags <img>
das páginas do projeto, sem alterar o layout visual.

Imagens LCP (acima da dobra, primeira imagem de cada página hero) recebem
loading="eager" e fetchpriority="high".
"""

import re
import os

PAGES_DIR = "/home/ubuntu/Cl-nica-Nexus/client/src/pages"

# Mapeamento: arquivo -> lista de srcs que são LCP (acima da dobra)
LCP_IMAGES = {
    "Home.tsx": [
        "WhatsAppImage2026-03-15at18.31.23_37e94606",  # hero principal
    ],
    "Space.tsx": [
        "WhatsAppImage2026-03-15at18.31.23_37e94606",
    ],
    "Team.tsx": [
        "WhatsAppImage2026-03-15at18.31.24(4)_24d83444",  # Dr. Airton
    ],
    "DrAirton.tsx": [
        "dr_airton",
        "WhatsAppImage2026-03-15at18.31.24(4)_24d83444",
    ],
    "Mariana.tsx": [
        "WhatsAppImage2026-03-15at19.00.28_a4ffe766",
    ],
    "CoworkingMedicos.tsx": [
        "oPxUKNpLAdSSGXes",  # fachada hero
    ],
    "ConsultorioPorHora.tsx": [
        "oPxUKNpLAdSSGXes",
    ],
    "AluguelConsultorio.tsx": [
        "oPxUKNpLAdSSGXes",
    ],
    "CoworkingVilaClementino.tsx": [
        "oPxUKNpLAdSSGXes",
    ],
    "CoworkingVilaMariana.tsx": [
        "oPxUKNpLAdSSGXes",
    ],
}

# Dimensões padrão por tipo de uso
# (serão aplicadas apenas se width/height não existirem)
DEFAULT_DIMS = {
    "hero": (1200, 800),
    "card": (600, 400),
    "profile": (600, 600),
    "gallery": (800, 600),
    "default": (800, 600),
}

def is_lcp(src: str, filename: str) -> bool:
    lcp_list = LCP_IMAGES.get(filename, [])
    return any(lcp_key in src for lcp_key in lcp_list)

def add_img_attrs(content: str, filename: str) -> str:
    """
    Para cada <img ...> sem loading=, adiciona:
    - loading="lazy" (ou "eager" para LCP)
    - decoding="async" (ou "sync" para LCP)
    - fetchpriority="high" para LCP
    - width e height se não existirem
    """
    
    def replace_img(m):
        tag = m.group(0)
        
        # Extrair src para verificar se é LCP
        src_match = re.search(r'src=\{?"([^"]+)"', tag)
        src = src_match.group(1) if src_match else ""
        
        # Verificar se é LCP
        lcp = is_lcp(src, filename)
        
        # Adicionar loading se não existir
        if 'loading=' not in tag:
            loading_val = "eager" if lcp else "lazy"
            tag = tag.rstrip("/>").rstrip() + f'\n                  loading="{loading_val}"'
        
        # Adicionar decoding se não existir
        if 'decoding=' not in tag:
            decoding_val = "sync" if lcp else "async"
            tag = tag.rstrip("/>").rstrip() + f'\n                  decoding="{decoding_val}"'
        
        # Adicionar fetchpriority para LCP
        if lcp and 'fetchpriority=' not in tag:
            tag = tag.rstrip("/>").rstrip() + '\n                  // @ts-ignore\n                  fetchPriority="high"'
        
        # Adicionar width e height se não existirem
        if 'width=' not in tag and 'height=' not in tag:
            # Determinar dimensões baseado no contexto
            if 'h-96' in tag or 'h-full' in tag:
                w, h = DEFAULT_DIMS["profile"]
            elif 'h-64' in tag or 'h-48' in tag:
                w, h = DEFAULT_DIMS["gallery"]
            else:
                w, h = DEFAULT_DIMS["default"]
            tag = tag.rstrip("/>").rstrip() + f'\n                  width={w}\n                  height={h}'
        
        # Fechar a tag corretamente
        if not tag.rstrip().endswith("/>"):
            tag = tag.rstrip() + "\n                />"
        
        return tag
    
    # Padrão para encontrar tags <img ...> sem loading=
    pattern = r'<img\s[^>]*?(?<!loading=")[^>]*?(?:/>|>)'
    
    # Processar apenas imgs sem loading=
    def conditional_replace(m):
        tag = m.group(0)
        if 'loading=' in tag:
            return tag  # já tem loading, não mexer
        return replace_img(m)
    
    new_content = re.sub(pattern, conditional_replace, content, flags=re.DOTALL)
    return new_content

# Processar todas as páginas
pages = [f for f in os.listdir(PAGES_DIR) if f.endswith(".tsx")]
changed = 0

for page in sorted(pages):
    filepath = os.path.join(PAGES_DIR, page)
    with open(filepath, "r") as f:
        content = f.read()
    
    # Verificar se há imgs sem loading=
    imgs_without_loading = re.findall(r'<img\s[^>]*?(?<!loading=")[^>]*?(?:/>|>)', content, re.DOTALL)
    imgs_without_loading = [img for img in imgs_without_loading if 'loading=' not in img]
    
    if not imgs_without_loading:
        print(f"✅ {page} — sem imgs para otimizar")
        continue
    
    new_content = add_img_attrs(content, page)
    
    if new_content != content:
        with open(filepath, "w") as f:
            f.write(new_content)
        print(f"✅ {page} — {len(imgs_without_loading)} img(s) otimizada(s)")
        changed += 1
    else:
        print(f"⚠️  {page} — nenhuma mudança aplicada")

print(f"\n✅ Total: {changed} arquivo(s) modificado(s)")
