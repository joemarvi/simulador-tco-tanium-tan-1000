export const questionBank = [

    {
        id: 1,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A global enterprise is evaluating how Tanium can scale to manage over 100,000 endpoints with minimal network impact.",
        question: "Which architectural feature MOST contributes to Tanium scalability?",
        answers: [
            "Centralized polling from the server",
            "Peer-to-peer linear chain communication",
            "Direct endpoint-server communication",
            "Manual data aggregation"
        ],
        correct: 1,
        explanation: "Peer-to-peer chain communication distributes load across endpoints, avoiding server bottlenecks. Centralized or direct communication models do not scale efficiently in large environments.",
        tags: ["architecture", "scalability"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 2,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding Tanium communication flow.",
        question: "Endpoints send query results directly to the Tanium Server.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Endpoints pass results along the peer chain, where data is aggregated before reaching the server. This reduces bandwidth usage significantly.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 3,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor is returning large datasets and slowing down queries in a large environment.",
        question: "What is the MOST effective way to optimize this sensor?",
        answers: [
            "Increase execution frequency",
            "Reduce output size and simplify logic",
            "Add more data fields",
            "Convert it into an action"
        ],
        correct: 1,
        explanation: "Sensor performance is directly tied to execution complexity and output size. Reducing both improves performance across all endpoints.",
        tags: ["sensors", "performance"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 4,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A team is reviewing sensor design best practices.",
        question: "Which characteristics define an efficient sensor?",
        answers: [
            "Minimal data output",
            "Efficient execution logic",
            "Relevant data only",
            "Complex scripts by default"
        ],
        correct: [0, 1, 2],
        explanation: "Efficient sensors minimize processing and data transfer. Complexity should be avoided unless absolutely necessary.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 5,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator needs to identify Windows endpoints with outdated antivirus definitions in a 70,000 endpoint environment.",
        question: "Which is the MOST efficient query?",
        answers: [
            "Get Antivirus Status from all machines",
            "Get Antivirus Status from all machines with Is Windows equals True",
            "Get Antivirus Status from all machines with (Is Windows equals True and Antivirus Status contains Outdated)",
            "Get Antivirus Status from all machines with Antivirus Status contains Outdated"
        ],
        correct: 2,
        explanation: "Combining OS filter with condition ensures minimal scope and reduces unnecessary processing.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 6,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query optimization in large environments.",
        question: "Running queries without filters increases system load and response time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Unfiltered queries force all endpoints to execute sensors, increasing load and latency.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 7,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is used across dashboards and reports.",
        question: "What is the impact of modifying the saved question?",
        answers: [
            "Only future executions change",
            "All dependent dashboards and reports are affected",
            "A new version is created automatically",
            "No impact"
        ],
        correct: 1,
        explanation: "Saved questions are shared objects. Modifications affect all dependencies — a common exam trap.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 8,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding reuse.",
        question: "Saved questions improve consistency across teams.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They standardize queries, reducing inconsistencies.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 9,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A patch must be deployed only to endpoints that are vulnerable.",
        question: "What is the BEST targeting method?",
        answers: [
            "Deploy to all endpoints",
            "Use OS-based targeting only",
            "Use dynamic targeting based on question results",
            "Manually select endpoints"
        ],
        correct: 2,
        explanation: "Dynamic targeting ensures only affected endpoints are impacted, reducing risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 10,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Deployment safety.",
        question: "Testing actions on a small subset before full deployment is a recommended best practice.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Testing minimizes risk and is heavily emphasized in the exam.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 11,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An endpoint in a communication chain becomes unavailable.",
        question: "How does Tanium handle this scenario?",
        answers: [
            "Stops communication entirely",
            "Requires manual repair",
            "Automatically rebuilds the chain",
            "Restarts the server"
        ],
        correct: 2,
        explanation: "Tanium dynamically reconfigures chains, ensuring resilience.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 12,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to reuse logic from another sensor.",
        question: "Which sensor type should be used?",
        answers: [
            "Fact sensor",
            "Derived sensor",
            "Static sensor",
            "Manual sensor"
        ],
        correct: 1,
        explanation: "Derived sensors reuse logic from existing sensors.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 13,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A query must return results quickly from a subset of endpoints.",
        question: "Which approach provides the fastest results?",
        answers: [
            "Query all endpoints",
            "Use targeted filters and minimal sensors",
            "Run multiple queries",
            "Avoid saved questions"
        ],
        correct: 1,
        explanation: "Performance improves with reduced scope and processing.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 14,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team is standardizing queries.",
        question: "Why use saved questions?",
        answers: [
            "Consistency",
            "Reusability",
            "Performance optimization",
            "Automatic patching"
        ],
        correct: [0, 1],
        explanation: "Saved questions provide consistency and reuse. They do not directly improve performance.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 15,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An action is deployed globally without testing and causes issues.",
        question: "What was the main mistake?",
        answers: [
            "Using a package",
            "Not testing on a subset",
            "Using filters",
            "Scheduling execution"
        ],
        correct: 1,
        explanation: "Testing is critical before full deployment.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 16,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "System design.",
        question: "Peer-to-peer communication reduces the load on the Tanium Server.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Load is distributed across endpoints.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 17,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor execution.",
        question: "Sensors execute locally on endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run on endpoints to collect real-time data.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 18,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Optimizing queries in a large environment.",
        question: "Which practices improve efficiency?",
        answers: [
            "Using filters",
            "Limiting sensors",
            "Using saved questions",
            "Querying all endpoints"
        ],
        correct: [0, 1, 2],
        explanation: "Efficiency comes from reducing scope and processing.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 19,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Configuring an action.",
        question: "What can be configured?",
        answers: [
            "Target endpoints",
            "Execution time",
            "Retry behavior",
            "Sensor logic"
        ],
        correct: [0, 1, 2],
        explanation: "Actions include targeting and execution settings, not sensor creation.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 20,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A dashboard depends on a saved question.",
        question: "What happens if it is deleted?",
        answers: [
            "No impact",
            "Dashboard breaks",
            "Auto replacement",
            "Endpoints cache results"
        ],
        correct: 1,
        explanation: "Dependencies break — classic exam pegadinha.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 21,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Analyzing system benefits.",
        question: "Which are advantages of Tanium architecture?",
        answers: [
            "Scalability",
            "Low latency",
            "High server load",
            "Efficient bandwidth usage"
        ],
        correct: [0, 1, 3],
        explanation: "Architecture reduces load and improves performance.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 22,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor is causing high CPU usage.",
        question: "What is the best fix?",
        answers: [
            "Increase frequency",
            "Reduce complexity",
            "Add more data",
            "Duplicate sensor"
        ],
        correct: 1,
        explanation: "Simplifying logic reduces CPU load.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 23,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A query must minimize network traffic.",
        question: "Which is the BEST approach?",
        answers: [
            "Query all endpoints",
            "Use filters and specific sensors",
            "Run repeatedly",
            "Avoid saved questions"
        ],
        correct: 1,
        explanation: "Targeted queries reduce traffic.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 24,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Scheduling.",
        question: "Actions can be scheduled for future execution.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Scheduling is a core feature.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 25,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Permissions.",
        question: "Access to saved questions can be restricted.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Permissions control access.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 26,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Designing sensors.",
        question: "What should be considered?",
        answers: [
            "Execution time",
            "Performance impact",
            "Data relevance",
            "UI design"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors must be efficient and relevant.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 27,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic usage.",
        question: "Interact supports live and saved questions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Both are supported.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 28,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Targeting endpoints.",
        question: "What determines action scope?",
        answers: [
            "Sensor type",
            "Target group",
            "Dashboard",
            "Logs"
        ],
        correct: 1,
        explanation: "Target group defines endpoints.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 29,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Understanding server role.",
        question: "What is the role of Tanium Server?",
        answers: [
            "Execute sensors",
            "Coordinate queries and aggregate results",
            "Install software",
            "Monitor logs only"
        ],
        correct: 1,
        explanation: "Server coordinates communication.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 30,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Reporting.",
        question: "Saved questions can be used in reports.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They are commonly used for reporting.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 31,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator must identify all online Linux endpoints with high CPU usage in a large environment.",
        question: "Which is the MOST efficient query?",
        answers: [
            "Get CPU Usage from all machines",
            "Get CPU Usage from all machines with CPU Usage > 80%",
            "Get CPU Usage from all machines with (Is Linux equals True and CPU Usage > 80%)",
            "Get CPU Usage from all machines with (Is Linux equals True and CPU Usage > 80% and Online equals True)"
        ],
        correct: 3,
        explanation: "The correct option combines OS, condition, and online status. Missing any filter increases unnecessary processing or reduces accuracy.",
        tags: ["interact", "optimization"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 32,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor returns inconsistent data across endpoints.",
        question: "What is the MOST likely cause?",
        answers: [
            "Server misconfiguration",
            "Different endpoint states and configurations",
            "Network latency",
            "Saved question issue"
        ],
        correct: 1,
        explanation: "Sensors execute locally, so results vary depending on endpoint configuration and state — a key exam concept.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 33,
        domain: "Actions",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A team is preparing to deploy a high-risk remediation action.",
        question: "Which best practices should be followed?",
        answers: [
            "Test on a subset",
            "Use dynamic targeting",
            "Deploy globally immediately",
            "Monitor execution results"
        ],
        correct: [0, 1, 3],
        explanation: "Testing, dynamic targeting, and monitoring are critical. Immediate global deployment is a common exam mistake.",
        tags: ["actions", "best_practice"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 34,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is used for compliance reporting across multiple departments.",
        question: "What is the PRIMARY benefit of using a saved question in this scenario?",
        answers: [
            "Faster sensor execution",
            "Consistent results across teams",
            "Reduced endpoint load",
            "Automatic remediation"
        ],
        correct: 1,
        explanation: "Saved questions ensure consistency and standardization, not performance improvement.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 35,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A security team wants near real-time visibility across all endpoints.",
        question: "Which Tanium capability enables this?",
        answers: [
            "Scheduled scans",
            "Linear chain communication with real-time query distribution",
            "Database polling",
            "Manual data exports"
        ],
        correct: 1,
        explanation: "The peer-to-peer chain allows rapid query propagation and near real-time responses.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 36,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query behavior.",
        question: "Adding unnecessary sensors to a query can negatively impact performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Each sensor increases processing on endpoints, impacting performance.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 37,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Improving sensor efficiency.",
        question: "Which actions improve sensor performance?",
        answers: [
            "Reduce logic complexity",
            "Limit returned data",
            "Use efficient scripting",
            "Increase execution frequency"
        ],
        correct: [0, 1, 2],
        explanation: "Efficiency comes from reducing computation and output. Increasing frequency worsens performance.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 38,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator wants to ensure an action only runs on endpoints that match current conditions at execution time.",
        question: "Which feature should be used?",
        answers: [
            "Static group targeting",
            "Manual selection",
            "Dynamic targeting based on question results",
            "Scheduled execution only"
        ],
        correct: 2,
        explanation: "Dynamic targeting ensures real-time evaluation at execution, avoiding stale targeting.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 39,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "System behavior.",
        question: "If one endpoint in the chain fails, Tanium automatically reconfigures communication paths.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Chain resilience is a core architectural feature.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 40,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Managing saved questions.",
        question: "Which are key considerations when modifying a saved question?",
        answers: [
            "Impact on dashboards",
            "Impact on reports",
            "Endpoint CPU usage",
            "User permissions"
        ],
        correct: [0, 1, 3],
        explanation: "Changes affect dependencies and access. CPU impact is unrelated.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 41,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator needs results quickly from a small subset of endpoints.",
        question: "Which strategy is BEST?",
        answers: [
            "Query all endpoints",
            "Use broad filters",
            "Use precise filters and minimal sensors",
            "Run multiple queries simultaneously"
        ],
        correct: 2,
        explanation: "Precision reduces processing and improves response time.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 42,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor behavior.",
        question: "A poorly designed sensor can impact endpoint performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run locally and consume resources.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 43,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An action must be executed during off-hours to minimize impact.",
        question: "Which feature enables this?",
        answers: [
            "Sensor scheduling",
            "Action scheduling",
            "Saved question timing",
            "Chain delay"
        ],
        correct: 1,
        explanation: "Actions can be scheduled for controlled execution timing.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 44,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Evaluating Tanium benefits.",
        question: "Which contribute to performance efficiency?",
        answers: [
            "Peer communication",
            "Data aggregation",
            "Central polling",
            "Distributed processing"
        ],
        correct: [0, 1, 3],
        explanation: "Tanium avoids centralized bottlenecks.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 45,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question returns unexpected results after modification.",
        question: "What is the MOST likely cause?",
        answers: [
            "Endpoint failure",
            "Change in query logic",
            "Network issue",
            "Server restart"
        ],
        correct: 1,
        explanation: "Changes in logic directly affect output across all uses.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 46,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Reducing query load.",
        question: "Which actions help?",
        answers: [
            "Apply filters",
            "Limit sensors",
            "Use saved questions",
            "Query entire environment"
        ],
        correct: [0, 1, 2],
        explanation: "Reducing scope and reuse improves efficiency.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 47,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution control.",
        question: "Actions can include retry logic.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Retry behavior ensures reliability.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 48,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor script is complex and slow.",
        question: "What is the BEST improvement?",
        answers: [
            "Add more output",
            "Simplify logic",
            "Increase frequency",
            "Duplicate sensor"
        ],
        correct: 1,
        explanation: "Simplification improves performance and reduces load.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 49,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Understanding communication flow.",
        question: "Where is data aggregated?",
        answers: [
            "At endpoints along the chain",
            "Only at server",
            "In dashboards",
            "In logs"
        ],
        correct: 0,
        explanation: "Aggregation happens along the chain before reaching server.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 50,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Usage scope.",
        question: "Saved questions can be shared across users with proper permissions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Permissions allow sharing.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 51,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator runs frequent queries causing performance degradation.",
        question: "What is the BEST solution?",
        answers: [
            "Run more queries",
            "Use saved questions and optimize filters",
            "Increase sensors",
            "Ignore performance"
        ],
        correct: 1,
        explanation: "Optimization and reuse reduce load.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 52,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Configuring actions.",
        question: "Which parameters can be configured?",
        answers: [
            "Targeting",
            "Scheduling",
            "Retry behavior",
            "Sensor execution logic"
        ],
        correct: [0, 1, 2],
        explanation: "Sensor logic is separate from actions.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 53,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic concept.",
        question: "Sensors collect endpoint data.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Core function of sensors.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 54,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Scaling concerns.",
        question: "What prevents server overload in Tanium?",
        answers: [
            "Manual processing",
            "Peer-to-peer distribution",
            "Direct communication",
            "Central polling"
        ],
        correct: 1,
        explanation: "Load is distributed across endpoints.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 55,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Dependency management.",
        question: "Why avoid deleting widely used saved questions?",
        answers: [
            "They consume CPU",
            "They break dependencies",
            "They slow sensors",
            "They block actions"
        ],
        correct: 1,
        explanation: "Deletion breaks dashboards and reports.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 56,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query scope.",
        question: "Reducing endpoint scope improves performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Less processing = faster results.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 57,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Avoiding unintended impact.",
        question: "What is the BEST safeguard before action deployment?",
        answers: [
            "Run immediately",
            "Test on subset",
            "Ignore targeting",
            "Use all endpoints"
        ],
        correct: 1,
        explanation: "Testing is critical for safe deployment.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 58,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Sensor quality.",
        question: "Which define good sensors?",
        answers: [
            "Efficient",
            "Relevant",
            "Lightweight",
            "Complex"
        ],
        correct: [0, 1, 2],
        explanation: "Complexity should be minimized.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 59,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Design principle.",
        question: "Tanium relies on distributed processing.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Processing is distributed across endpoints.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 60,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Usage scenario.",
        question: "What is a key benefit of saved questions in large teams?",
        answers: [
            "Reduced CPU usage",
            "Standardized queries",
            "Faster sensors",
            "Automatic actions"
        ],
        correct: 1,
        explanation: "They ensure consistency across teams.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 61,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A Tanium operator needs to quickly identify online Windows servers missing a critical patch in a 90,000 endpoint environment.",
        question: "Which is the MOST efficient query?",
        answers: [
            "Get Patch Status from all machines",
            "Get Patch Status from all machines with Patch Status contains Missing",
            "Get Patch Status from all machines with (Is Windows equals True and Patch Status contains Missing)",
            "Get Patch Status from all machines with (Is Windows Server equals True and Patch Status contains Missing and Online equals True)"
        ],
        correct: 3,
        explanation: "The correct answer fully scopes the query (OS type + condition + online status). Other options either over-scope or miss critical filters, increasing load or reducing accuracy.",
        tags: ["interact", "optimization"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 62,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An action was targeted using a static group, but some endpoints that no longer meet the criteria still executed the action.",
        question: "What would have prevented this issue?",
        answers: [
            "Using manual targeting",
            "Using dynamic targeting based on a question",
            "Using broader filters",
            "Scheduling the action"
        ],
        correct: 1,
        explanation: "Dynamic targeting ensures endpoints are evaluated at execution time, avoiding stale group membership — a key exam concept.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 63,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor is returning excessive data that is not being used by the team.",
        question: "What is the BEST optimization approach?",
        answers: [
            "Increase frequency",
            "Remove unnecessary output fields",
            "Add more logic",
            "Convert to action"
        ],
        correct: 1,
        explanation: "Reducing output minimizes network usage and processing time. More data = more overhead.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 64,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A company compares Tanium to traditional client-server tools.",
        question: "What is the PRIMARY advantage of Tanium’s architecture?",
        answers: [
            "Higher server dependency",
            "Centralized execution",
            "Distributed query execution and aggregation",
            "Manual data collection"
        ],
        correct: 2,
        explanation: "Distributed execution across endpoints is the key differentiator and enables scalability.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 65,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is modified and suddenly compliance reports show different results.",
        question: "What is the MOST likely explanation?",
        answers: [
            "Endpoint failure",
            "Query logic was changed",
            "Server overload",
            "Sensor stopped working"
        ],
        correct: 1,
        explanation: "Saved questions propagate changes everywhere. This is a classic exam scenario.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 66,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A team is optimizing queries in a large environment.",
        question: "Which practices reduce query execution time?",
        answers: [
            "Apply precise filters",
            "Reduce number of sensors",
            "Use targeted endpoint scope",
            "Query entire environment"
        ],
        correct: [0, 1, 2],
        explanation: "Performance is driven by reducing scope and processing. Querying everything is the worst option.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 67,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action execution behavior.",
        question: "Dynamic targeting ensures endpoints are evaluated at execution time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "This prevents outdated targeting decisions.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 68,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Sensor performance review.",
        question: "Which factors negatively impact sensor performance?",
        answers: [
            "Complex scripts",
            "Large output data",
            "Frequent execution",
            "Minimal logic"
        ],
        correct: [0, 1, 2],
        explanation: "All listed factors increase load except minimal logic.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 69,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding scalability.",
        question: "Tanium’s architecture reduces the need for constant server communication.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Peer communication minimizes server dependency.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 70,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Managing shared queries.",
        question: "What risks exist when modifying a saved question?",
        answers: [
            "Breaking dashboards",
            "Changing report results",
            "Increasing endpoint CPU",
            "Affecting multiple teams"
        ],
        correct: [0, 1, 3],
        explanation: "CPU impact is unrelated, but dependencies are critical.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 71,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A query returns slow results in a large environment.",
        question: "What is the PRIMARY cause?",
        answers: [
            "Using filters",
            "Querying all endpoints without scope",
            "Using saved questions",
            "Limiting sensors"
        ],
        correct: 1,
        explanation: "Unscoped queries create maximum load and latency.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 72,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator wants to deploy software only to endpoints that currently do not have it installed.",
        question: "What is the BEST method?",
        answers: [
            "Deploy to all endpoints",
            "Use static targeting",
            "Use dynamic targeting based on install status",
            "Manually select endpoints"
        ],
        correct: 2,
        explanation: "Dynamic targeting ensures real-time evaluation and avoids unnecessary deployment.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 73,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor execution.",
        question: "Sensors execute centrally on the Tanium Server.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Sensors execute locally on endpoints, not centrally.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 74,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Understanding data flow.",
        question: "What reduces network traffic in Tanium?",
        answers: [
            "Central polling",
            "Peer aggregation of results",
            "Manual filtering",
            "Server caching only"
        ],
        correct: 1,
        explanation: "Aggregation reduces the amount of data transmitted.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 75,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A team needs consistent reporting across regions.",
        question: "What should they use?",
        answers: [
            "Manual queries",
            "Saved questions",
            "Raw sensors",
            "Actions"
        ],
        correct: 1,
        explanation: "Saved questions standardize results.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 76,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Optimizing large queries.",
        question: "Which reduce execution time?",
        answers: [
            "Filtering endpoints",
            "Reducing sensors",
            "Targeting subsets",
            "Adding more sensors"
        ],
        correct: [0, 1, 2],
        explanation: "Less processing = faster execution.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 77,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution logic.",
        question: "Actions can be configured with expiration times.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Expiration prevents outdated execution.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 78,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Sensor optimization.",
        question: "What is the MOST efficient sensor design?",
        answers: [
            "Complex and detailed",
            "Minimal and focused",
            "High frequency",
            "Large output"
        ],
        correct: 1,
        explanation: "Minimal design reduces resource consumption.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 79,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "System benefits.",
        question: "Which are benefits of Tanium architecture?",
        answers: [
            "Scalability",
            "Real-time visibility",
            "High latency",
            "Distributed load"
        ],
        correct: [0, 1, 3],
        explanation: "High latency is incorrect; Tanium reduces latency.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 80,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic usage.",
        question: "Saved questions can be reused across dashboards.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They are designed for reuse.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 81,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator needs the fastest possible response time.",
        question: "What is the BEST approach?",
        answers: [
            "Query all endpoints",
            "Use precise targeting and minimal sensors",
            "Run repeated queries",
            "Avoid filters"
        ],
        correct: 1,
        explanation: "Precision minimizes processing and speeds results.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 82,
        domain: "Actions",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Preparing a production deployment.",
        question: "Which steps reduce risk?",
        answers: [
            "Test subset",
            "Use dynamic targeting",
            "Monitor results",
            "Deploy globally immediately"
        ],
        correct: [0, 1, 2],
        explanation: "Immediate deployment is risky.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 83,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Data collection.",
        question: "Sensors collect real-time data from endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They execute at query time.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 84,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Comparing architectures.",
        question: "What differentiates Tanium from traditional tools?",
        answers: [
            "Central polling",
            "Distributed execution",
            "Manual processes",
            "Static data"
        ],
        correct: 1,
        explanation: "Distributed execution is key.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 85,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is widely used.",
        question: "What should be done before modifying it?",
        answers: [
            "Modify immediately",
            "Assess impact on dependencies",
            "Delete first",
            "Ignore usage"
        ],
        correct: 1,
        explanation: "Impact analysis is critical.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 86,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query optimization.",
        question: "Reducing the number of sensors improves performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Less processing required.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 87,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Ensuring safe deployment.",
        question: "What is the BEST first step?",
        answers: [
            "Deploy globally",
            "Test on small group",
            "Ignore targeting",
            "Run repeatedly"
        ],
        correct: 1,
        explanation: "Testing reduces risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 88,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Sensor design.",
        question: "What defines efficient sensors?",
        answers: [
            "Lightweight",
            "Relevant",
            "Efficient",
            "Complex"
        ],
        correct: [0, 1, 2],
        explanation: "Complexity should be minimized.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 89,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "System design.",
        question: "Tanium distributes workload across endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Core principle.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 90,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Team collaboration.",
        question: "What is the main advantage of saved questions?",
        answers: [
            "Faster sensors",
            "Consistency and reuse",
            "Lower CPU",
            "Automatic execution"
        ],
        correct: 1,
        explanation: "Consistency across teams.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 91,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A Tanium operator needs to identify online endpoints with a specific vulnerable application installed, but must minimize impact in a 120,000 endpoint environment.",
        question: "Which is the MOST efficient query?",
        answers: [
            "Get Installed Applications from all machines",
            "Get Installed Applications from all machines with Installed Applications contains VulnerableApp",
            "Get Installed Applications from all machines with (Installed Applications contains VulnerableApp and Online equals True)",
            "Get Installed Applications from all machines with (Installed Applications contains VulnerableApp and Online equals True and Is Windows equals True)"
        ],
        correct: 3,
        explanation: "Best practice is to fully scope queries: application + online + OS filter. Missing filters increases load or reduces accuracy.",
        tags: ["interact", "optimization"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 92,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An action was scheduled using a saved question, but some endpoints executed the action even after they were remediated.",
        question: "What is the MOST likely cause?",
        answers: [
            "Dynamic targeting was used",
            "Static snapshot of results was used",
            "Sensor failure",
            "Server overload"
        ],
        correct: 1,
        explanation: "If results are captured at deployment time (static), endpoints may no longer meet criteria at execution time. Dynamic targeting avoids this.",
        tags: ["actions", "targeting"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 93,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A sensor used in multiple saved questions is updated with additional logic.",
        question: "What is the PRIMARY impact?",
        answers: [
            "Only new queries are affected",
            "All dependent saved questions may return different results",
            "No impact",
            "Actions stop working"
        ],
        correct: 1,
        explanation: "Sensors are reused components; changes propagate everywhere they are used — similar to saved questions.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 94,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A company wants to understand how Tanium achieves near real-time responses even at scale.",
        question: "Which mechanism enables this?",
        answers: [
            "Centralized polling",
            "Parallel server queries",
            "Peer-to-peer chain with distributed execution",
            "Scheduled data collection"
        ],
        correct: 2,
        explanation: "Distributed execution and aggregation along the chain enables near real-time visibility.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 95,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A query is impacting endpoint performance.",
        question: "Which factors may be contributing?",
        answers: [
            "Too many sensors",
            "Complex sensor logic",
            "Large endpoint scope",
            "Using filters"
        ],
        correct: [0, 1, 2],
        explanation: "Filters reduce load; the others increase it.",
        tags: ["interact", "performance"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 96,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Targeting behavior.",
        question: "Using dynamic targeting ensures only endpoints matching conditions at execution time run the action.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dynamic targeting reevaluates endpoints at execution, preventing stale targeting.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 97,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A team is designing a sensor for enterprise-wide use.",
        question: "What should be prioritized?",
        answers: [
            "Performance efficiency",
            "Minimal output",
            "Relevant data only",
            "Maximum detail always"
        ],
        correct: [0, 1, 2],
        explanation: "More detail is not always better; efficiency is critical at scale.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 98,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is used in multiple automated workflows.",
        question: "What is the BIGGEST risk when modifying it?",
        answers: [
            "Increased CPU usage",
            "Breaking dependent workflows",
            "Slower queries",
            "Endpoint failure"
        ],
        correct: 1,
        explanation: "Dependencies across workflows can break — high-impact scenario in exams.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 99,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Data flow.",
        question: "Data is aggregated progressively as it moves through the endpoint chain.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Aggregation reduces network usage.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 100,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator must retrieve results as fast as possible with minimal system impact.",
        question: "What is the BEST strategy?",
        answers: [
            "Query all endpoints frequently",
            "Use precise filters and minimal sensors",
            "Run multiple parallel queries",
            "Avoid saved questions"
        ],
        correct: 1,
        explanation: "Minimizing scope and processing ensures fastest response.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 101,
        domain: "Actions",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A high-risk remediation is planned.",
        question: "Which steps reduce risk?",
        answers: [
            "Test on subset",
            "Use dynamic targeting",
            "Monitor execution",
            "Deploy globally immediately"
        ],
        correct: [0, 1, 2],
        explanation: "Immediate global deployment is a classic mistake.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 102,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution location.",
        question: "Sensors execute locally on endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Core principle of Tanium.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 103,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A query includes unnecessary sensors.",
        question: "What is the impact?",
        answers: [
            "Faster results",
            "No change",
            "Increased processing and slower response",
            "Better accuracy"
        ],
        correct: 2,
        explanation: "More sensors = more work for endpoints.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 104,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Understanding system efficiency.",
        question: "What is the key factor in Tanium's low bandwidth usage?",
        answers: [
            "Central data collection",
            "Peer aggregation",
            "Manual filtering",
            "Static queries"
        ],
        correct: 1,
        explanation: "Aggregation reduces transmitted data.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 105,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Dependency awareness.",
        question: "Deleting a saved question can impact dashboards and reports.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dependencies break immediately.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 106,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator wants to ensure an action is only executed if conditions are still valid.",
        question: "What should be used?",
        answers: [
            "Static targeting",
            "Manual selection",
            "Dynamic targeting",
            "Scheduled execution"
        ],
        correct: 2,
        explanation: "Dynamic targeting ensures real-time validation.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 107,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Sensor optimization.",
        question: "What improves efficiency?",
        answers: [
            "Simplified logic",
            "Reduced output",
            "Efficient scripting",
            "More complexity"
        ],
        correct: [0, 1, 2],
        explanation: "Complexity reduces performance.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 108,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Scope control.",
        question: "Reducing endpoint scope improves query performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Less scope = less work.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 109,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "System capabilities.",
        question: "Which are core Tanium strengths?",
        answers: [
            "Real-time visibility",
            "Scalability",
            "Central bottlenecks",
            "Distributed processing"
        ],
        correct: [0, 1, 3],
        explanation: "Central bottlenecks are avoided.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 110,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A saved question is widely reused.",
        question: "What should be done before modifying it?",
        answers: [
            "Modify immediately",
            "Analyze dependencies",
            "Delete and recreate",
            "Ignore impact"
        ],
        correct: 1,
        explanation: "Impact analysis is critical in production environments.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 111,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution control.",
        question: "Actions can be configured with expiration times.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Prevents outdated execution.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 112,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator needs accurate and fast results.",
        question: "What is the BEST approach?",
        answers: [
            "Broad queries",
            "Precise filters and minimal sensors",
            "Multiple queries",
            "No filters"
        ],
        correct: 1,
        explanation: "Precision improves both speed and accuracy.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 113,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Behavior.",
        question: "Sensor results may vary across endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Different endpoint states produce different results.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 114,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Scaling design.",
        question: "What prevents server overload?",
        answers: [
            "Central polling",
            "Distributed processing",
            "Manual queries",
            "Static data"
        ],
        correct: 1,
        explanation: "Load is distributed across endpoints.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 115,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Managing shared resources.",
        question: "What should be considered before modifying saved questions?",
        answers: [
            "Dependencies",
            "Reports",
            "Dashboards",
            "Sensor CPU usage"
        ],
        correct: [0, 1, 2],
        explanation: "Dependencies matter most.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 116,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A deployment must avoid unnecessary execution.",
        question: "What is the BEST method?",
        answers: [
            "Deploy to all",
            "Static targeting",
            "Dynamic targeting",
            "Manual selection"
        ],
        correct: 2,
        explanation: "Dynamic targeting ensures only relevant endpoints execute.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 117,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Sensor design trade-offs.",
        question: "What is the MOST important factor at scale?",
        answers: [
            "Detail level",
            "Performance efficiency",
            "Frequency",
            "Complexity"
        ],
        correct: 1,
        explanation: "Performance is critical in large environments.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 118,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Improving query efficiency.",
        question: "Which actions help?",
        answers: [
            "Filtering endpoints",
            "Reducing sensors",
            "Targeting subsets",
            "Adding complexity"
        ],
        correct: [0, 1, 2],
        explanation: "Complexity reduces performance.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 119,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Core principle.",
        question: "Tanium distributes workload across endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Fundamental concept.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 120,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Enterprise reporting.",
        question: "What is the MAIN benefit of saved questions?",
        answers: [
            "Faster sensors",
            "Consistency and reuse",
            "Lower CPU usage",
            "Automatic remediation"
        ],
        correct: 1,
        explanation: "They standardize queries across the organization.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    }

];