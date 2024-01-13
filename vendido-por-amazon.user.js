// ==UserScript==
// @name            Vendido por Amazon
// @description     Añade parámetro para filtrar por los vendidos por Amazon
// @author          Joseahfer
// @version         0.1
// @match           *://*.amazon.*/s*
// @downloadURL     https://github.com/Joseahfer/Vendido-por-Amazon/raw/master/vendido-por-amazon.user.js
// @updateURL       https://github.com/Joseahfer/Vendido-por-Amazon/raw/master/vendido-por-amazon.user.js
// @run-at          document-start
// ==/UserScript==

// Conociendo web de acceso
var url = location.hostname;

// Region de Amazon
var es = "www.amazon.es"
var it = "www.amazon.it"
var de = "www.amazon.de"
var fr = "www.amazon.fr"
var us = "www.amazon.com"
var uk = "www.amazon.co.uk"

// https://stackoverflow.com/questions/5997450/append-to-url-and-refresh-page/5998205#comment60216567_27970946
// Amazon España
if(url == es) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AA1AT7YVPFBWXBL';}
}

// Amazon Italia
if(url == it) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AA11IL2PNWYJU7H';}
}

// Amazon Alemania
if(url == de) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AA3JWKAKR8XB7XF';}
}

// Amazon Francia
if(url == fr) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AA1X6FK5RDHNB96';}
}

// Amazon Estados Unidos
if(url == us) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AATVPDKIKX0DER';}
}

// Amazon Reino Unido
if(url == uk) {
  if(window.location.search.indexOf('&rh=') == -1) {window.location.search += '&rh=p_6%3AA3P5ROKL5A1OLE';}
}