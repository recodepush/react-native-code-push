var CodePushWrapper = require("../codePushWrapper.js");
import CodePush from "@code-push-next/react-native-code-push";

module.exports = {
    startTest: function (testApp) {
        CodePushWrapper.checkAndInstall(testApp, undefined, undefined, CodePush.InstallMode.IMMEDIATE);
    },

    getScenarioName: function () {
        return "Install";
    }
};