# tanstack-template

Shadcn Tankstack Start Template

This template was generated with shadcn Preset

`npx shadcn@latest init --preset bJMTbSvQ --template start`

|||
-|-
Style | Nova
 Base Color| Stone
Theme |Amber
Chart Color |Stone
Font |Noto Sans
Icons |Lucide

---

Para gerar um novo projeto baseado neste template crie escolhendo a branch específica

Exemplo
```bat
git clone -b advanced-shadcn-components --single-branch https://github.com/ricardodarocha/tanstack-template.git novo_tanstack-template && ^
cd novo_tanstack-template && ^
rmdir /s /q .git && ^
git init && ^
git add . && ^
git commit -m "Initial commit from advanced-shadcn-components" && ^
gh repo create novo_tanstack-template --public --source=. --remote=origin --push
```

- [x] Tailwind
- [x] Radix
- [x] Tansktack

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## ShadCN available components

Already added!

npx shadcn@latest add input input-group label accordion alert alert-dialog avatar badge breadcrumb button-group calendar card carousel checkbox collapsible combobox command context-menu dialog drawer dropdown-menu empty field hover-card item kbd menubar native-select navigation-menu pagination popover progress radio-group resizable scroll-area select separator sheet sidebar skeleton slider sonner spinner switch tabs textarea toggle toggle-group tooltip 

Advanced Components

npx shadcn@latest add input-otp 
npx shadcn@latest add table 
npx shadcn@latest add chart
