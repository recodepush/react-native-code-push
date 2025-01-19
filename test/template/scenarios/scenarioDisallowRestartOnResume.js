var CodePushWrapper = require("../codePushWrapper.js");
import CodePush from "@code-push-next/react-native-code-push";

module.exports = {
    startTest: function (testApp) {
        CodePush.disallowRestart();
        CodePushWrapper.checkAndInstall(testApp,
            undefined,
            undefined,
            CodePush.InstallMode.ON_NEXT_RESUME,
            undefined,
            true
        );
    },

    getScenarioName: function () {
        return "disallowRestart";
    }
};
