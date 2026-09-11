(function () {
  var viewedProjectsKey = "portfolio-viewed-projects";
  var projectFile = window.location.pathname.split("/").pop();
  var ignoredFiles = ["", "project.html", "template.html"];

  if (ignoredFiles.indexOf(projectFile) !== -1) return;

  try {
    var viewedProjects = JSON.parse(localStorage.getItem(viewedProjectsKey) || "[]");
    if (viewedProjects.indexOf(projectFile) === -1) {
      viewedProjects.push(projectFile);
      localStorage.setItem(viewedProjectsKey, JSON.stringify(viewedProjects));
    }
  } catch (error) {
    // Project tracking is optional if localStorage is blocked.
  }
})();
