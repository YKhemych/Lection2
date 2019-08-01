var App = /** @class */ (function () {
    function App() {
        this.tasks = [];
    }
    App.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    App.prototype.completedTask = function () {
        return this.tasks.filter(function (_a) {
            var completed = _a.completed;
            return completed;
        });
    };
    App.prototype.getWorkers = function () {
        var workers = [];
        this.tasks.forEach(function (_a) {
            var workers = _a.workers;
            return workers.push.apply(workers, workers);
        });
        return new Set(workers).slice();
    };
    App.prototype.getTasks = function () {
        return this.tasks;
    };
    return App;
}());
var Task = /** @class */ (function () {
    function Task(title, estimate) {
        this.title = title;
        this.estimate = estimate;
        this.completed = false;
        this.logs = [];
        this.workers = [];
    }
    Task.prototype.setConsumedTime = function (time) {
        this.consumedTime = time;
    };
    Task.prototype.setWorker = function (worker) {
        this.workers.push(worker);
    };
    Task.prototype.setCompleted = function () {
        this.completed = true;
    };
    Task.prototype.setLogs = function (log) {
        this.logs.push(log);
    };
    Task.prototype.getLogs = function () {
        return this.logs;
    };
    return Task;
}());
var WorkerUser = /** @class */ (function () {
    function WorkerUser(name) {
        this.name = name;
    }
    return WorkerUser;
}());
var Log = /** @class */ (function () {
    function Log(title, description) {
        this.title = title;
        this.description = description;
    }
    return Log;
}());
