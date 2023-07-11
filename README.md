# Desafío de frontendpractice.com

Como se puede ver en la [página de la consigna original](https://www.frontendpractice.com/projects/monstercat), la idea es recrear una página de un álbum musical. La función principal es la interacción del usuario con el audio, y el desafío fue sincronizar el estado de React con la interfaz de audio HTML.

## Diferencias con el original

###
Para mantener mi sanidad y concentrarme en el desafío principal de la página, bajé el número de media breakpoints de 5 (o más) a 3, probablemente haya habido una buena razón para esos ajustes más finos, no estoy planteando esto como una mejora.

###
A modo de práctica agregé un reproductor de audio con controles de volumen, para trabajar las diferentes opciones de dar estilo a un `<input>` tipo slider, y como ajustar su UI para distintos tamaños de pantalla.

###
Usé componentes accesibles cortesía de Radix UI, para garantizar que cumplen con los requerimientos de accesibilidad necesarios.

###
Conecte el estado del reproductor a la API MediaSession, que permite controlar el audio con las ventanas de notificación pertinentes en celulares y sistemas operativos compatibles, así como controlar el reproductor con teclas multimedia.

