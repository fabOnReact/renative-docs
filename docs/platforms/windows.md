---
id: windows
title: Windows Platform
sidebar_label: Windows
original_id: windows
---

<table>
  <tbody>
  <tr>
  <td>
    <img src="https://img.shields.io/badge/Mac-n/a-lightgrey.svg" />
    <img src="https://img.shields.io/badge/Windows-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/Linux-n/a-lightgrey.svg" />
    <img src="https://img.shields.io/badge/HostMode-yes-brightgreen.svg" />
  </td>
  </tr>
  </tbody>
</table>

<img className="platform-image" src="/img/rnv_windows.gif" height="250"/>


- support for Windows 10+
- Based on Electron

---
## File Extension Support

<!--EXTENSION_SUPPORT_START-->

Extenstions are defined via engines. Engines with windows support: 
- [@rnv/engine-rn-electron](../engines/engine-rn-electron#extensions)

<!--EXTENSION_SUPPORT_END-->

---
## Requirements

- Windows dev environment

---
## Run

Run on Simulator

```
rnv run -p windows
```

Run in Browser

```
rnv run -p windows --hosted
```

---
## App Config

[see: Web based config](../api/schemas/rnv.project.md)
