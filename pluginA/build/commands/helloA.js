"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const toolbelt_api_test_1 = require("@thiagoveras/toolbelt-api-test");
class HelloA extends command_1.Command {
    async run() {
        this.parse(HelloA);
        this.log(`Hello from Plugin A at ${toolbelt_api_test_1.Display.time()}`);
    }
}
exports.default = HelloA;
HelloA.description = 'Single Command from Plugin A';
HelloA.examples = [
    `$ clitest helloA`
];
HelloA.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
HelloA.args = [{ name: 'file' }];
