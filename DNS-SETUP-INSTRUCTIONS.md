# DNS Configuration for galway.com.br

## Registro.br DNS Setup

### 1. Log in to Registro.br
- Go to: https://registro.br/painel/
- Enter your credentials

### 2. Access Your Domain
- Click on **"Domínios"**
- Click on **"galway.com.br"**

### 3. Access DNS Management
- Look for **"Editar Zona"** or **"DNS"** section
- Click on **"Editar Zona DNS"** or **"Gerenciar DNS"**

### 4. Add A Records (4 total)

Click **"Adicionar Registro"** for each:

**Record 1:**
- Tipo: `A`
- Nome/Host: `@` (or leave blank)
- Valor/Destino: `185.199.108.153`
- TTL: `3600` (default)

**Record 2:**
- Tipo: `A`
- Nome/Host: `@`
- Valor/Destino: `185.199.109.153`

**Record 3:**
- Tipo: `A`
- Nome/Host: `@`
- Valor/Destino: `185.199.110.153`

**Record 4:**
- Tipo: `A`
- Nome/Host: `@`
- Valor/Destino: `185.199.111.153`

### 5. Add CNAME Record (for www)

Click **"Adicionar Registro"**:
- Tipo: `CNAME`
- Nome/Host: `www`
- Valor/Destino: `lynchip.github.io.` (note the period at the end)

### 6. Save Changes
- Click **"Salvar"** or **"Aplicar Alterações"**

### 7. Remove Old Records
- If there are existing A or CNAME records, delete them first

---

## After DNS Configuration

### Check DNS Propagation
- Visit: https://www.whatsmydns.net/#A/galway.com.br
- Wait 15 minutes to 48 hours for propagation

### Enable HTTPS on GitHub
1. Go to: https://github.com/lynchip/galway-website/settings/pages
2. Once DNS shows as configured, check **"Enforce HTTPS"**

### Your Sites Will Be:
- GitHub Pages: https://lynchip.github.io/galway-website
- Custom Domain: https://galway.com.br
- With www: https://www.galway.com.br

---

## Troubleshooting

If the domain doesn't work after 48 hours:
1. Verify all 4 A records are added correctly
2. Check that CNAME file exists in your repo
3. Ensure GitHub Pages shows "DNS check successful"
4. Try clearing browser cache or using incognito mode
