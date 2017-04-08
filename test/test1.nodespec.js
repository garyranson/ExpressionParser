"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("../src/parser");
var chai = require("chai");
var chai_interface = require("chai-interface");
var compiler_1 = require("../src/compiler");
var expressions_1 = require("../src/expressions");
var scanner_1 = require("../src/scanner");
chai.should();
chai.use(chai_interface);
describe("Sayings Greeter", function () {
    var parser;
    var compiler;
    var scope;
    var x = function (expr) {
        var ast = parser.parseExpression(expr);
        var c = compiler.compile(ast);
        return c.eval(scope);
    };
    var scan = function (expr) {
        return new scanner_1.Scanner(expr).next();
    };
    var scanall = function (expr) {
        var s = new scanner_1.Scanner(expr);
        var a = [];
        while (true) {
            var t = s.next();
            a.push(t);
            if (t.type === "eof")
                return a;
        }
    };
    beforeEach(function () {
        parser = new parser_1.default();
        compiler = new compiler_1.Compiler();
        scope = {
            val1: 1,
            arr: [5, 4, 3, 2, 1],
            a: {
                a1: 1,
                a2: 2,
                a3: 3
            },
            b: {
                fn: function (a, b) {
                    return "" + _this + a + b;
                }
            }
        };
    });
    it("parses literal primitives", function () {
        // http://es5.github.io/x7.html#x7.8.4
        var tests = [
            { expression: "b.fn(1,2).toString()", value: scope.b.fn(1, 2).toString(), type: expressions_1.MemberCallExpression },
            { expression: "b.fn", value: scope.b.fn, type: expressions_1.MemberAccessorExpression },
            { expression: "b.fn(1,2)", value: scope.b.fn(1, 2), type: expressions_1.MemberCallExpression },
            { expression: "a", value: scope.a, type: expressions_1.ScopedAccessorExpression },
            { expression: "a.a1", value: scope.a.a1, type: expressions_1.MemberAccessorExpression },
            { expression: "a.a1+10/3", value: scope.a.a1 + 10 / 3, type: expressions_1.BinaryExpression },
            { expression: "(a.a1)+10/3", value: (scope.a.a1) + 10 / 3, type: expressions_1.BinaryExpression },
            { expression: "arr", value: scope.arr, type: expressions_1.ScopedAccessorExpression },
            { expression: "arr[1]", value: scope.arr[1], type: expressions_1.MemberAccessorExpression },
            { expression: "'foo'", value: "foo", type: expressions_1.LiteralString },
            { expression: "'\\''", value: "'", type: expressions_1.LiteralString },
            { expression: "'\"'", value: "\"", type: expressions_1.LiteralString },
            { expression: "'\\f'", value: "\f", type: expressions_1.LiteralString },
            { expression: "'\\n'", value: "\n", type: expressions_1.LiteralString },
            { expression: "'\\r'", value: "\r", type: expressions_1.LiteralString },
            { expression: "'\\t'", value: "\t", type: expressions_1.LiteralString },
            { expression: "'\\v'", value: "\v", type: expressions_1.LiteralString },
            { expression: "true", value: true, type: expressions_1.Literal },
            { expression: "false", value: false, type: expressions_1.Literal },
            { expression: "null", value: null, type: expressions_1.Literal },
            { expression: "undefined", value: undefined, type: expressions_1.Literal },
            { expression: "0", value: 0, type: expressions_1.LiteralNumber },
            { expression: "1", value: 1, type: expressions_1.LiteralNumber },
            { expression: "2.2", value: 2.2, type: expressions_1.LiteralNumber },
            { expression: "1+2", value: 3, type: expressions_1.BinaryExpression },
            { expression: "val1", value: scope.val1, type: expressions_1.ScopedAccessorExpression }
        ];
        for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
            var test_1 = tests_1[_i];
            //    expect(ast).instanceof(test.type, test.expression);
            //   let c = compiler.compile(ast);
            //    expect(c.eval(scope)).equals(test.value, test.expression);
        }
        // expect(x("1+1")).equal(2);
        // expect(x("1 || 2")).equal(1);
    });
});
