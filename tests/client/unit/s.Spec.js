describe('Satellite game', function () {
  beforeEach(function () {

  });

  it('should exists', function () {
      expect(s).to.be.an('object');
      expect(s).to.have.property('config');
      expect(s).to.have.property('init');
  });

  it('should contains ship properties', function () {
    expect(s).to.have.deep.property('config.ship.hull');
    expect(s).to.have.deep.property('config.ship.shields');
    expect(s).to.have.deep.property('config.ship.maxSpeed');
  });

  it('should init the game', function () {
    var spy = sinon.spy();
    s.init('init', spy);
    spy.called.should.equal.true;
  });
});
