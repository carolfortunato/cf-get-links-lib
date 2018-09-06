#Pegador de Links v.1.0.0

Essa biblioteca serve para separar markdowns de texto de links e URLs do texto. Na versão atual, 
extrai os textos de dentro dos [] e as URLs.

##Método

Os métodos utilizados na biblioteca são:
getLinksFromMd(text);

Exemplo de Uso:
```
$node
> let links = require("cf-get-links-lib")
> links.getLinksFromMd("oi [google] https://www.google.com tudo bem com você?"); 
//[{ href: 'https://www.google.com',
//   text: '[google]' }]);

```

##versão 1.0.0
Funcionalidade: extração de links em markdowns.

Você deverá ter o node + npm instalados. Para guia de instalação, visite o site oficial.

##Roadmap oficial do projeto

###versão 2.0.0 
(sem previsão)
Correção de bugs

###Versão 1.0.0 (released)
Funcionalidade: extração de links em markdowns.

##Keywords
####markdown
####links# getLinksFromText
