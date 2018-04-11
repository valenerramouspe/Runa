var React = require('react')
var chai = require('chai');
var Reloj = require('./src/clockFunc.js');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
// var TestUtils = require('react-addons-test-utils');
// var TestUtils = require('react-dom/test-utils');
var expect = require('expect');

describe('Reloj', () => {
  it('Debería existir', () => {
    expect(Reloj).toExist();
  });

  describe('render', () => {
    it('Debería renderizar el Reloj', () => {
      var reloj = TestUtils.renderIntoDocument( <Reloj time={3600000}/>);
      var el = ReactDOM.findDOMNode(reloj);
      var textHoras = el.children[0].innerText;
      var textMinutos = el.children[1].innerText;
      var textSegundos = el.children[2].innerText;
      var textMilisegundos = el.children[3].innerText;
      expect(textHoras).toBe('Horas:1');
      expect(textMinutos).toBe('Minutos:0');
      expect(textSegundos).toBe('Segundos:0');
      expect(textMilisegundos).toBe('Milisegundos:0');
    })
  })
  ;

});

/*  function testeadora(time){

  var ms=(time%1000);
  var ss=(Math.floor(time/ 1000)%60);
  var min=(Math.floor(time/60000)%60);
  var hh=(Math.floor(time/3600000)%60);}

        <div>
      <p>Horas:{hh}</p>
      <p>Minutos:{min}</p>
      <p>Segundos:{ss}</p>
      <p>Milisegundos:{ms}</p>
      </div>*/