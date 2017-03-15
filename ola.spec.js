const code =require ('code');
const lab =require ('lab');
const lab =exports.lab =lab.script ();
const { bemVindo} =require ('.ola.js')
lab.test('verifica', function(done)){
code.expect (bemVindo('mario')),to.equal('Bem vindo Mário')}
