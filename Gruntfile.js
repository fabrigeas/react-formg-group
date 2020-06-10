module.exports = function (grunt) {
  // https://www.npmjs.com/package/grunt-shell

  /** Generate a version higher than the current version
   *
   */
  const generateVersion = () => {
    const [a, b, c] = grunt.config("pkg").version.split(".");
    const major = Number(a);
    const minor = Number(b);
    const patch = Number(c);

    return patch + 1 < 10
      ? `${major}.${minor}.${patch + 1}`
      : minor + 1 < 10
      ? `${major}.${minor + 1}.${0}`
      : `${major + 1}.${0}.${0}`;
  };

  grunt.loadNpmTasks("grunt-shell");

  const pkg = grunt.file.readJSON("package.json");

  grunt.initConfig({
    pkg,
    shell: {
      options: {
        stderr: false,
      },
      build: "rollup -c",
      copyDTFile: "cp build/FormGroup/FormGroup.d.ts build/index.d.ts",
      copyMapFile: "cp build/FormGroup/FormGroup.d.ts.map build/index.d.ts.map",
      watchBuild: "rollup -c -w",
      view: "npm view @fabrigeas/react-form-group",
      cleanBuild: "rimraf build",
      cleanDT: "rimraf build/FormGroup",
      commit: "git add --all && git commit -am 'publishing'",
      pushMaster: "git push origin master",
      pushTags: "git push --tags",
      publish: "npm publish --access=public",
      version: "npm version",
      copy: {
        command: (src, dest) => `cp ${src} ${dest}`,
      },
      upgradeVersion: `npm version ${generateVersion()}`,
    },
  });

  grunt.registerTask("publish", "Publish the library to npm.", function () {
    grunt.task.run([
      "shell:commit",
      "shell:cleanBuild",
      "shell:build",
      "shell:copyDTFile",
      "shell:copyMapFile",
      "shell:cleanDT",
      "shell:upgradeVersion",
      "shell:pushMaster",
      "shell:pushTags",
      "shell:publish",
    ]);
  });

  grunt.registerTask('default', ['shell:version']);
};
