describe('jsclass', function() {
  describe('initialization', function () {
    it('inits a class with a prototype', function() {
      var mock = {
        init: function init() {
        }
      };

      spyOn(mock, 'init');

      var TestClass = Class('TestClass', {
        init: mock.init
      });

      var testClass = new TestClass();

      expect(mock.init).toHaveBeenCalled();
    });
  });

  describe('super', function () {
    var TestClass, SuperClass, TestClassNoSuper;

    beforeEach(function () {
      SuperClass = Class('SuperClass', {
        say: function say() {
          console.log('Super Class say');
        }
      });

      TestClass = Class('TestClass', {
        say: function say() {
          console.log('Test Class say');
          this._super();
        }
      }).inherits(SuperClass);

      TestClassNoSuper = Class('TestClass', {
        say: function say() {
          console.log('Test Class say');
          this._super();
        }
      });
    });

    it('calls super method if superclass is available', function() {
      var testClass = new TestClass();

      spyOn(SuperClass.prototype, 'say');

      testClass.say();

      expect(SuperClass.prototype.say).toHaveBeenCalled();
    });

    it('does not call super method if superclass is not available', function() {
      var testClass = new TestClassNoSuper();

      spyOn(SuperClass.prototype, 'say');

      testClass.say();

      expect(SuperClass.prototype.say).not.toHaveBeenCalled();
    });
  });

});
