var chai   = require("chai"),
	sinon  = require("sinon"),
	Play   = require("./play.js"),
	assert = chai.assert,
	expect = chai.expect;


describe("Play Library", function() {

 describe("#constructor", function() {

		var play = new Play();


	it("should return a default name if no name is passed", function() {

		
		expect(play.name).to.be.equal("oyin");
	})

	it("should return a name if passed", function() {
		
		 play = new Play("maja");
		
		// expect(play.name).to.be.equal("maja");
		assert.equal(play.name, "maja");
	})
  
  })

 describe("#greets", function(){
 	
 	var play, sandbox, log, error;
 	
 	before(function() {
 		play = new Play("Tunde");

 		 sandbox = sinon.sandbox.create();
		 log = sandbox.stub(console, "log");
 		 error = sandbox.stub(console, "error");

 	})

 	afterEach(function(){
 		log.reset();
 		error.reset();
 		sinon.sandbox.reset();
 	})
 	
 	it("should throw an error if target is not passed", function(){
 		
 		play.greets();

 		sinon.assert.calledOnce(error);
 		sinon.assert.calledWithExactly(error, "cannot find target");
 		sinon.assert.notCalled(log);
 	})
 	
 	it("should return a message when target is passed", function() {
 		
 		var message = play.greets("Lola");

 		sinon.assert.calledOnce(log);
 		sinon.assert.notCalled(error);

 		sinon.assert.calledWithExactly(log, "Tunde greets Lola");

 	})

 })

 describe("#lateGreet", function() {
 	var play;

 	before(function() {
 		play = new Play();
 	})
 	it("should throw an error if the target is not passed", function(done) {
 		play.lateGreeting(null, function(err, val) {

 			expect(err).to.be.an.instanceof(Error);
 			done();
 		})
 	})
 
 	it("should  return a value", function(done) {

 		play.lateGreeting("Ade", function(err, val) {

 			expect(val).to.be.equal("oyin greets Ade");
 			done();
 		})
 	})

 })


})