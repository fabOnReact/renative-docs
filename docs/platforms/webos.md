---
id: webos
title: LG WebOS Platform
sidebar_label: LG WebOS
original_id: webos
---

<table>
  <tr>
  <td>
    <img src="https://img.shields.io/badge/Mac-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/Windows-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/Linux-yes-brightgreen.svg" />
    <img src="https://img.shields.io/badge/HostMode-yes-brightgreen.svg" />
  </td>
  </tr>
</table>

<img className="platform-image" src="/img/rnv_webos.gif" height="250"/>


- Latest LG webOS Project

---
## File Extension Support

<!--EXTENSION_SUPPORT_START-->

Extenstions are defined via engines. Engines with webos support: 
- [@rnv/engine-rn-web](../engines/engine-rn-web#extensions)

<!--EXTENSION_SUPPORT_END-->

---
## Requirements

- [LG Emulator](http://webostv.developer.lge.com/develop/tools/emulator-introduction/) v3.0.0

---
## Project Configuration

| Feature          | Version |
| ---------------- | :-----: |
| react-native-web | `0.9.9` |
| Babel Core       | `7.1.2` |

---
## Emulator

- launch webOS emulator via CLI

```bash
rnv target launch -p webos -t emulator
```

- launch webOS emulator Manually

usually located in something like:

```
<USER_PATH>/Library/webOS_TV_SDK/Emulator/v4.0.0/LG_webOS_TV_Emulator_RCU.app
```

---
## Run

Run on Simulator

```
rnv run -p webos
```

Run on Device

```
rnv run -p webos -d
```

Run in Browser

```
rnv run -p webos --hosted
```

---
## App Config

[see: Web based config](../api/schemas/rnv.project.md)
