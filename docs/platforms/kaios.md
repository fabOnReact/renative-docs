---
id: kaios
title: KaiOS Platform
sidebar_label: KaiOS
original_id: kaios
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

<img className="platform-image" src="/img/rnv_kaios.gif" height="250"/>

---
## File Extension Support

<!--EXTENSION_SUPPORT_START-->

Extenstions are defined via engines. Engines with kaios support: 
- [@rnv/engine-rn-web](../engines/engine-rn-web#extensions)

<!--EXTENSION_SUPPORT_END-->

---
## Requirements

:::warning
Kaios simulator only works in ubuntu 18.04 or later.
:::

- [KaiOSrt](https://developer.kaiostech.com/docs/sfp-3.0/getting-started/env-setup/simulator) for simulator

After installation you can launch it via Applications:

<table>
  <tr>
    <th>
    <img src="/img/kaios1.png" />
    </th>
  </tr>
</table>

---
## Run

Run on Simulator

```
rnv run -p kaios
```

Run on Device

```
rnv run -p kaios -d
```

Run in Browser

```
rnv run -p kaios --hosted
```

---
## App Config

[see: Web based config](../api/schemas/rnv.project.md)
