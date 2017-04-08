System.register(["../src/lexer", "chai", "chai-interface"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lexer_1, chai, chai_interface, chai_1;
    return {
        setters: [
            function (lexer_1_1) {
                lexer_1 = lexer_1_1;
            },
            function (chai_2) {
                chai = chai_2;
                chai_1 = chai_2;
            },
            function (chai_interface_1) {
                chai_interface = chai_interface_1;
            }
        ],
        execute: function () {
            chai.should();
            chai.use(chai_interface);
            describe("Lexer Reader Tests", function () {
                it("Simple Test 1", function () {
                    var lr = new lexer_1.default("");
                    chai_1.expect(lr.next()).to.deep.equal({ type: "eof", value: "", start: 0, end: 0 });
                });
                it("Simple Test 2", function () {
                    var lr = new lexer_1.default("one");
                    chai_1.expect(lr.next()).to.deep.equal({ type: "token", value: "one", start: 0, end: 2 });
                    chai_1.expect(lr.next()).to.deep.equal({ type: "eof", value: "", start: 3, end: 3 });
                    chai_1.expect(lr.next()).to.deep.equal({ type: "eof", value: "", start: 3, end: 3 });
                });
            });
        }
    };
});
//# sourceMappingURL=lexer.nodespec.js.map