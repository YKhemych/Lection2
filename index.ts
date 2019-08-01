interface IApp {
    tasks: Array<Task>;
    addTask(task: Task): void;
    completedTask(): Array<Task>,
    getWorkers(): Array<WorkerUser>
    getTasks(): Array<Task>
}

class App implements IApp{
    public tasks: Array<Task>;
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    completedTask(){
        return this.tasks.filter( ({ completed }) => completed);
    }
    getWorkers(){
        const workers: Array<WorkerUser> = [];
        this.tasks.forEach(({ workers }) => workers.push(...workers));
        return [...new Set(workers)];
    }
    getTasks(){
        return this.tasks;
    }
}

interface ITask {
    title: string,
    workers: Array<WorkerUser>,
    estimate: number,
    consumedTime: number,
    completed: boolean,
    logs: Array<Log>,
    setConsumedTime(time: number): void,
    setWorker(worker: WorkerUser): void,
    setCompleted(): void,
    setLogs(log: Log): void,
    getLogs(): Array<Log>
}

class Task implements ITask{
    public logs: Array<Log>;
    public workers: Array<WorkerUser>;
    public consumedTime: number;
    public completed: boolean;
    public title: string;
    public estimate: number;
    constructor(title, estimate){
        this.title = title;
        this.estimate = estimate;
        this.completed = false;
        this.logs = [];
        this.workers = [];
    }
    setConsumedTime(time){
        this.consumedTime = time;
    }

    setWorker(worker){
        this.workers.push(worker);
    }

    setCompleted(){
        this.completed = true;
    }

    setLogs(log){
        this.logs.push(log);
    }

    getLogs(){
        return this.logs;
    }
}

interface IWorker {
    name: string
}

class WorkerUser implements IWorker{
    public name: string;

    constructor(name: string){
       this.name = name;
    }
}

interface ILog {
    title: string,
    description: string
}

class Log implements ILog{
    public title: string;
    public description: string;

    constructor(title: string, description: string){
        this.title = title;
        this.description = description;
    }
}