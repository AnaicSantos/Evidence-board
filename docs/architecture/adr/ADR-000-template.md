# ADR-001 — Escolha de tecnologias

**Data:** 31 de Março de 2026  
**Estado:** Aceite  
**Decisores:** Ana Santos  

---

## Contexto

O projeto Evidence Board tem como objetivo desenvolver um MVP simples para organização de informação sob a forma de grafos.

É necessário escolher uma abordagem tecnológica que permita desenvolvimento rápido e com baixa complexidade.

---

## Decisão

Utilizar HTML, CSS e JavaScript, sem backend.

---

## Alternativas consideradas

| Alternativa                     | Razão de rejeição                               |
| ------------------------------- | ----------------------------------------------- |
| Utilizar framework (React, Vue) | Aumenta a complexidade para o âmbito do projeto |
| Implementar backend             | Não necessário para o MVP                       |

---

## Consequências

### Positivas

* Desenvolvimento mais rápido
* Menor complexidade
* Fácil execução no browser

### Negativas / trade-offs

* Limitação na persistência de dados
* Menor escalabilidade futura
