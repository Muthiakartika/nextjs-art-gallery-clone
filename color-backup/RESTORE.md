# Theme color backup

`theme-backup-20260710-095448.zip` berisi berkas tema **persis sebelum** sistem
warna warm-neutral diterapkan:

- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/**` (semua komponen)

## Cara restore (PowerShell, dari root project)

```powershell
Expand-Archive -Path .\color-backup\theme-backup-20260710-095448.zip -DestinationPath .\_restore -Force
Copy-Item .\_restore\globals.css .\src\app\globals.css -Force
Copy-Item .\_restore\layout.tsx  .\src\app\layout.tsx  -Force
Copy-Item .\_restore\components\* .\src\components\   -Recurse -Force
Remove-Item .\_restore -Recurse -Force
```

Lalu jalankan ulang dev server. (Backup ini dibuat sebelum migrasi warna
chocolate `#8a5a3c` → sistem warm-neutral berbasis token.)
