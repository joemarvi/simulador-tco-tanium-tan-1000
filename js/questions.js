export const questionBank = [

    {
        id: 1,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding Tanium communication.",
        question: "Tanium endpoints communicate using a peer-to-peer chain architecture.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints form peer-to-peer chains to distribute queries and responses efficiently.",
        tags: ["architecture", "p2p"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 2,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A network team wants to know how Tanium scales across thousands of endpoints.",
        question: "Which component coordinates endpoint communication and query distribution?",
        answers: [
            "Tanium Core Server",
            "Tanium Endpoint Sensor",
            "Tanium Client Chain",
            "Tanium Connect Module"
        ],
        correct: 0,
        explanation: "The Tanium Core Server coordinates query distribution and data aggregation.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 3,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants to minimize network traffic during endpoint queries.",
        question: "Which Tanium features help reduce network load?",
        answers: [
            "Peer-to-peer communication",
            "Aggregated responses",
            "Direct server polling",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "Peer chains, aggregated responses, and filtering reduce traffic.",
        tags: ["architecture", "performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 4,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An administrator studies Tanium sensors.",
        question: "Where do Tanium sensors execute?",
        answers: [
            "On the Tanium Server",
            "On endpoints",
            "In the Tanium database",
            "On network switches"
        ],
        correct: 1,
        explanation: "Sensors execute locally on endpoints.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 5,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding query response time.",
        question: "Tanium can return data from thousands of endpoints within seconds.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Tanium's architecture allows near real-time visibility.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 6,
        domain: "Asking Questions",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator wants to see endpoint hostnames.",
        question: "Which sensor provides the hostname of an endpoint?",
        answers: [
            "Computer Name",
            "Network Adapter",
            "Logged In User",
            "Operating System"
        ],
        correct: 0,
        explanation: "Computer Name sensor retrieves the hostname.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 7,
        domain: "Asking Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security team is gathering endpoint inventory data.",
        question: "Which sensors are commonly used for asset inventory?",
        answers: [
            "Operating System",
            "Installed Applications",
            "IP Address",
            "CPU Usage"
        ],
        correct: [0, 1, 2],
        explanation: "OS, applications, and IP address help identify assets.",
        tags: ["inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 8,
        domain: "Asking Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An analyst is running queries in Interact.",
        question: "Questions in Tanium retrieve data from endpoints using sensors.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors gather endpoint data when a question is asked.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 9,
        domain: "Asking Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A user wants to know which endpoints are online.",
        question: "Which sensor should be used?",
        answers: [
            "Online",
            "Machine Status",
            "Connection Status",
            "Endpoint Active"
        ],
        correct: 0,
        explanation: "The Online sensor identifies active endpoints.",
        tags: ["status"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 10,
        domain: "Refining Questions",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An admin wants to limit results to Windows machines.",
        question: "Which filter can be used?",
        answers: [
            "Is Windows equals true",
            "Operating System equals Linux",
            "Device Type equals Server",
            "Hostname contains WIN"
        ],
        correct: 0,
        explanation: "The Is Windows sensor filters Windows endpoints.",
        tags: ["filters"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 11,
        domain: "Refining Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An administrator is refining query results.",
        question: "Which techniques refine Tanium question results?",
        answers: [
            "Sensor filters",
            "Computer groups",
            "Server logs",
            "Question parameters"
        ],
        correct: [0, 1, 3],
        explanation: "Filters, groups, and parameters refine query results.",
        tags: ["filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 12,
        domain: "Refining Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An operator is reviewing computer groups.",
        question: "Dynamic computer groups update automatically based on defined criteria.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dynamic groups automatically update membership.",
        tags: ["groups"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 13,
        domain: "Refining Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A new endpoint must be added to a manual group.",
        question: "What should the administrator do?",
        answers: [
            "Edit the group membership",
            "Restart the Tanium server",
            "Create a new question",
            "Modify endpoint sensors"
        ],
        correct: 0,
        explanation: "Manual groups require manual editing.",
        tags: ["groups"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 14,
        domain: "Taking Action",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator wants to deploy a script to endpoints.",
        question: "What feature allows running scripts on endpoints?",
        answers: [
            "Tanium Actions",
            "Sensor Queries",
            "Computer Groups",
            "Saved Questions"
        ],
        correct: 0,
        explanation: "Actions execute commands on endpoints.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 15,
        domain: "Taking Action",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding endpoint actions.",
        question: "Actions in Tanium can be scheduled to run later.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions support scheduling.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 16,
        domain: "Taking Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An admin is configuring a scheduled action.",
        question: "Which options can be configured for an action?",
        answers: [
            "Start time",
            "Target group",
            "Distribution time",
            "Endpoint CPU priority"
        ],
        correct: [0, 1, 2],
        explanation: "Actions support scheduling, targeting, and distribution.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 17,
        domain: "Modules",
        type: "single_choice",
        difficulty: "easy",
        scenario: "A team wants to integrate Tanium with external tools.",
        question: "Which module sends Tanium data to external systems?",
        answers: [
            "Connect",
            "Interact",
            "Deploy",
            "Discover"
        ],
        correct: 0,
        explanation: "Connect exports Tanium data.",
        tags: ["modules"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 18,
        domain: "Modules",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security team wants vulnerability assessments.",
        question: "Which module provides vulnerability scanning?",
        answers: [
            "Comply",
            "Deploy",
            "Patch",
            "Reveal"
        ],
        correct: 0,
        explanation: "Comply provides vulnerability management.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 19,
        domain: "Modules",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding Tanium Deploy.",
        question: "The Deploy module is used for distributing software packages.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Deploy distributes software across endpoints.",
        tags: ["deploy"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 20,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An organization uses multiple Tanium modules.",
        question: "Which modules are related to endpoint management?",
        answers: [
            "Deploy",
            "Patch",
            "Comply",
            "Connect"
        ],
        correct: [0, 1, 2],
        explanation: "Deploy, Patch, and Comply manage endpoints.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 21,
        domain: "Reporting",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An analyst exports query results.",
        question: "Which format is commonly used to export data to spreadsheets?",
        answers: [
            "CSV",
            "XML",
            "JSON-RPC",
            "SQL"
        ],
        correct: 0,
        explanation: "CSV works easily with spreadsheets.",
        tags: ["reporting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 22,
        domain: "Reporting",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding reporting.",
        question: "Saved questions allow administrators to reuse common queries.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Saved questions store commonly used queries.",
        tags: ["reporting"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 23,
        domain: "Reporting",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team uses Tanium dashboards.",
        question: "What can dashboards display?",
        answers: [
            "Saved question results",
            "Charts",
            "Endpoint metrics",
            "Database logs"
        ],
        correct: [0, 1, 2],
        explanation: "Dashboards display query results and visualizations.",
        tags: ["dashboards"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 24,
        domain: "Security",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding access control.",
        question: "Role-Based Access Control (RBAC) restricts user permissions in Tanium.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "RBAC defines permissions based on roles.",
        tags: ["security"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 25,
        domain: "Security",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to limit user permissions.",
        question: "Which mechanism controls user privileges?",
        answers: [
            "RBAC",
            "Endpoint Sensors",
            "Saved Questions",
            "Peer Chains"
        ],
        correct: 0,
        explanation: "RBAC manages user privileges.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 26,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Security policies are being reviewed.",
        question: "Which elements improve Tanium security?",
        answers: [
            "RBAC",
            "Audit logs",
            "Encryption",
            "Endpoint sensors"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC, auditing, and encryption strengthen security.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 27,
        domain: "Performance",
        type: "true_false",
        difficulty: "easy",
        scenario: "Performance testing.",
        question: "Peer-to-peer chains help Tanium scale to large environments.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Peer chains reduce load on the central server.",
        tags: ["performance"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 28,
        domain: "Performance",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A query needs faster response time.",
        question: "What helps reduce response time?",
        answers: [
            "Efficient sensors",
            "Larger SQL servers",
            "More dashboards",
            "Manual groups"
        ],
        correct: 0,
        explanation: "Efficient sensors improve query performance.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 29,
        domain: "Performance",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Performance tuning is being reviewed.",
        question: "Which factors affect Tanium query performance?",
        answers: [
            "Sensor complexity",
            "Number of endpoints",
            "Network latency",
            "Dashboard colors"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors, endpoint count, and network latency impact performance.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 30,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A network engineer reviews endpoint communication.",
        question: "What ensures queries propagate through endpoint chains?",
        answers: [
            "Tanium Client",
            "Database Replication",
            "Endpoint API",
            "SQL Queries"
        ],
        correct: 0,
        explanation: "The Tanium Client forwards queries across the chain.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 31,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding endpoint communication reliability.",
        question: "If one endpoint in a Tanium peer chain becomes unavailable, the chain can automatically reroute communication.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Tanium can dynamically rebuild chains if endpoints become unavailable.",
        tags: ["architecture", "resilience"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 32,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A network engineer analyzes Tanium data flow.",
        question: "What mechanism allows endpoints to share query responses efficiently?",
        answers: [
            "Peer aggregation",
            "Direct database queries",
            "Centralized polling",
            "Broadcast scanning"
        ],
        correct: 0,
        explanation: "Endpoints aggregate responses as data flows up the chain.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 33,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company is evaluating Tanium scalability.",
        question: "Which factors contribute to Tanium scalability?",
        answers: [
            "Peer-to-peer communication",
            "Distributed query processing",
            "Local sensor execution",
            "Manual endpoint polling"
        ],
        correct: [0, 1, 2],
        explanation: "Peer communication, distributed processing, and local sensors enable scalability.",
        tags: ["architecture", "scale"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 34,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator wants to identify the operating system.",
        question: "Which sensor returns the OS information?",
        answers: [
            "Operating System",
            "Computer Name",
            "Network Adapter",
            "Endpoint Status"
        ],
        correct: 0,
        explanation: "The Operating System sensor returns OS information.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 35,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Learning about sensor execution.",
        question: "Sensors gather information directly from endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run locally on endpoints to retrieve data.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 36,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An administrator wants detailed endpoint information.",
        question: "Which data types can sensors retrieve?",
        answers: [
            "Installed software",
            "Running processes",
            "Disk usage",
            "Firewall policies"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors commonly collect software, process, and disk information.",
        tags: ["sensors", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 37,
        domain: "Asking Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security analyst wants to identify endpoints running a specific process.",
        question: "Which sensor should be used?",
        answers: [
            "Running Processes",
            "Installed Applications",
            "Logged In User",
            "Endpoint Status"
        ],
        correct: 0,
        explanation: "Running Processes lists active processes.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 38,
        domain: "Asking Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding question types.",
        question: "Saved questions allow operators to reuse previously defined queries.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Saved questions simplify repeated queries.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 39,
        domain: "Asking Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team wants better query organization.",
        question: "Which features improve question management?",
        answers: [
            "Saved questions",
            "Question categories",
            "Dashboards",
            "Database indexing"
        ],
        correct: [0, 1, 2],
        explanation: "Saved questions, categories, and dashboards help manage queries.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 40,
        domain: "Refining Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to narrow results to servers only.",
        question: "Which filter helps target servers?",
        answers: [
            "Machine Type equals Server",
            "Hostname contains srv",
            "Operating System equals Windows",
            "IP Address contains 10"
        ],
        correct: 0,
        explanation: "Machine Type can identify servers.",
        tags: ["filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 41,
        domain: "Refining Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Working with computer groups.",
        question: "Computer groups can be used to limit the scope of a question.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Groups define which endpoints are targeted.",
        tags: ["groups"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 42,
        domain: "Refining Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An admin creates a dynamic group.",
        question: "Which elements define membership in a dynamic group?",
        answers: [
            "Sensor results",
            "Filter conditions",
            "Manual endpoint selection",
            "Question criteria"
        ],
        correct: [0, 1, 3],
        explanation: "Dynamic groups rely on sensor results and filters.",
        tags: ["groups"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 43,
        domain: "Taking Action",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator wants to restart a service on endpoints.",
        question: "What mechanism executes commands on endpoints?",
        answers: [
            "Tanium Action",
            "Sensor Query",
            "Dashboard Task",
            "Computer Group"
        ],
        correct: 0,
        explanation: "Actions execute commands remotely.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 44,
        domain: "Taking Action",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action scheduling.",
        question: "Actions can be distributed over time to reduce network load.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Distribution spreads execution across endpoints.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 45,
        domain: "Taking Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An action is being configured.",
        question: "Which parameters can be configured for actions?",
        answers: [
            "Target endpoints",
            "Start time",
            "Expiration time",
            "SQL query priority"
        ],
        correct: [0, 1, 2],
        explanation: "Actions define targets, start time, and expiration.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 46,
        domain: "Modules",
        type: "single_choice",
        difficulty: "easy",
        scenario: "A team wants to detect unmanaged devices.",
        question: "Which module discovers unmanaged assets?",
        answers: [
            "Discover",
            "Deploy",
            "Patch",
            "Reveal"
        ],
        correct: 0,
        explanation: "Discover identifies unmanaged assets.",
        tags: ["modules"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 47,
        domain: "Modules",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding the Patch module.",
        question: "The Patch module manages operating system patch deployment.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Patch automates OS patch management.",
        tags: ["patch"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 48,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company is reviewing security modules.",
        question: "Which modules contribute to endpoint security?",
        answers: [
            "Comply",
            "Patch",
            "Reveal",
            "Deploy"
        ],
        correct: [0, 1, 2],
        explanation: "Comply, Patch, and Reveal enhance security visibility.",
        tags: ["modules", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 49,
        domain: "Reporting",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An admin wants regular reporting.",
        question: "Which feature allows scheduled query execution?",
        answers: [
            "Saved Question",
            "Manual Question",
            "Endpoint Script",
            "Server Log"
        ],
        correct: 0,
        explanation: "Saved questions can be reused and scheduled.",
        tags: ["reporting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 50,
        domain: "Reporting",
        type: "true_false",
        difficulty: "easy",
        scenario: "Dashboard review.",
        question: "Dashboards visualize data collected from Tanium queries.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dashboards display query data visually.",
        tags: ["dashboards"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 51,
        domain: "Reporting",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An analyst exports data to external tools.",
        question: "Which export formats are commonly used?",
        answers: [
            "CSV",
            "JSON",
            "XML",
            "TXT"
        ],
        correct: [0, 1, 2],
        explanation: "CSV, JSON, and XML are common export formats.",
        tags: ["reporting"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 52,
        domain: "Security",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A user account needs limited permissions.",
        question: "Which security model manages access control?",
        answers: [
            "RBAC",
            "Peer Chains",
            "Sensor Filtering",
            "Endpoint Policies"
        ],
        correct: 0,
        explanation: "RBAC defines permissions by role.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 53,
        domain: "Security",
        type: "true_false",
        difficulty: "medium",
        scenario: "Audit review.",
        question: "Audit logs track administrative activities in Tanium.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Audit logs track system actions.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 54,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security audit is being performed.",
        question: "Which practices improve Tanium security?",
        answers: [
            "RBAC implementation",
            "Audit logging",
            "Data encryption",
            "Sensor caching"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC, logs, and encryption improve security.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 55,
        domain: "Performance",
        type: "true_false",
        difficulty: "easy",
        scenario: "Scaling discussion.",
        question: "Sensor efficiency affects overall query performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Efficient sensors improve response time.",
        tags: ["performance"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 56,
        domain: "Performance",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A query takes too long.",
        question: "What should be optimized first?",
        answers: [
            "Sensor design",
            "Dashboard layout",
            "Server theme",
            "Endpoint hostname"
        ],
        correct: 0,
        explanation: "Sensor efficiency is key to query speed.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 57,
        domain: "Performance",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Investigating slow queries.",
        question: "Which factors can slow Tanium queries?",
        answers: [
            "Complex sensors",
            "High endpoint count",
            "Network latency",
            "Dashboard refresh rate"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors, endpoints, and network latency affect performance.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 58,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Endpoint communication is analyzed.",
        question: "Which component manages endpoint chain membership?",
        answers: [
            "Tanium Client",
            "Tanium SQL Server",
            "Dashboard Engine",
            "Endpoint API"
        ],
        correct: 0,
        explanation: "The Tanium Client manages chain communication.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 59,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Reviewing endpoint discovery.",
        question: "Tanium clients must be installed on endpoints to participate in peer chains.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints require the Tanium Client.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 60,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An architect reviews endpoint communication.",
        question: "Which benefits result from Tanium's architecture?",
        answers: [
            "Real-time visibility",
            "Reduced WAN traffic",
            "Scalable endpoint communication",
            "Centralized scanning load"
        ],
        correct: [0, 1, 2],
        explanation: "Tanium architecture enables visibility, scalability, and low network usage.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 61,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An administrator wants to know which user is currently logged in.",
        question: "Which sensor provides information about the logged-in user?",
        answers: [
            "Logged In User",
            "Operating System",
            "Network Adapter",
            "Computer Name"
        ],
        correct: 0,
        explanation: "The Logged In User sensor returns the active user on the endpoint.",
        tags: ["sensors", "inventory"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 62,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Reviewing endpoint data collection.",
        question: "Sensors can collect both real-time and cached information from endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Some sensors execute live while others use cached data.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 63,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team collects hardware inventory.",
        question: "Which information can sensors typically retrieve?",
        answers: [
            "CPU model",
            "Memory size",
            "Disk capacity",
            "SQL database schema"
        ],
        correct: [0, 1, 2],
        explanation: "Hardware sensors can gather CPU, RAM, and disk information.",
        tags: ["inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 64,
        domain: "Asking Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to know which machines have low disk space.",
        question: "Which sensor should be used?",
        answers: [
            "Free Disk Space",
            "Operating System",
            "Running Processes",
            "Network Adapter"
        ],
        correct: 0,
        explanation: "Free Disk Space reports available disk capacity.",
        tags: ["queries"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 65,
        domain: "Asking Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding Tanium queries.",
        question: "Questions can be scoped to a specific computer group.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Questions can target defined endpoint groups.",
        tags: ["queries"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 66,
        domain: "Asking Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team is building a complex query.",
        question: "Which components are part of a Tanium question?",
        answers: [
            "Sensors",
            "Filters",
            "Computer groups",
            "Database tables"
        ],
        correct: [0, 1, 2],
        explanation: "Questions combine sensors, filters, and group targeting.",
        tags: ["queries"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 67,
        domain: "Refining Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to target only Linux endpoints.",
        question: "Which filter should be applied?",
        answers: [
            "Operating System contains Linux",
            "Hostname contains linux",
            "Machine Type equals Linux",
            "Endpoint Type equals Linux"
        ],
        correct: 0,
        explanation: "Filtering by Operating System is the correct method.",
        tags: ["filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 68,
        domain: "Refining Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Working with dynamic groups.",
        question: "Dynamic computer groups rely on sensor results to determine membership.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dynamic groups evaluate sensor conditions automatically.",
        tags: ["groups"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 69,
        domain: "Refining Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An operator organizes endpoint groups.",
        question: "Which advantages do computer groups provide?",
        answers: [
            "Scoped queries",
            "Targeted actions",
            "Improved organization",
            "Automatic OS patching"
        ],
        correct: [0, 1, 2],
        explanation: "Groups help scope queries and actions.",
        tags: ["groups"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 70,
        domain: "Taking Action",
        type: "single_choice",
        difficulty: "easy",
        scenario: "A script needs to run across several endpoints.",
        question: "What is required before executing an action?",
        answers: [
            "Define the target endpoints",
            "Restart the Tanium server",
            "Update SQL database",
            "Create new sensors"
        ],
        correct: 0,
        explanation: "Actions must target endpoints or groups.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 71,
        domain: "Taking Action",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action management review.",
        question: "Actions can have expiration times to limit execution windows.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Expiration prevents actions from running indefinitely.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 72,
        domain: "Taking Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An admin is configuring a large deployment.",
        question: "Which settings help control action execution?",
        answers: [
            "Distribution time",
            "Start time",
            "Target group",
            "Database index"
        ],
        correct: [0, 1, 2],
        explanation: "Distribution, start time, and targeting control actions.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 73,
        domain: "Modules",
        type: "single_choice",
        difficulty: "easy",
        scenario: "A team wants detailed endpoint threat visibility.",
        question: "Which module provides threat detection capabilities?",
        answers: [
            "Reveal",
            "Deploy",
            "Patch",
            "Connect"
        ],
        correct: 0,
        explanation: "Reveal focuses on threat detection and investigation.",
        tags: ["modules"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 74,
        domain: "Modules",
        type: "true_false",
        difficulty: "medium",
        scenario: "Reviewing Tanium Connect.",
        question: "The Connect module exports Tanium data to external systems.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Connect integrates Tanium data with other tools.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 75,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An organization uses multiple modules.",
        question: "Which modules assist with vulnerability and patch management?",
        answers: [
            "Comply",
            "Patch",
            "Deploy",
            "Discover"
        ],
        correct: [0, 1],
        explanation: "Comply handles vulnerability scanning while Patch manages updates.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 76,
        domain: "Reporting",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An analyst creates visual metrics.",
        question: "Where are charts and visualizations commonly displayed?",
        answers: [
            "Dashboards",
            "Saved Questions",
            "Endpoint Logs",
            "Server Console"
        ],
        correct: 0,
        explanation: "Dashboards visualize collected data.",
        tags: ["dashboards"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 77,
        domain: "Reporting",
        type: "true_false",
        difficulty: "easy",
        scenario: "Exporting Tanium results.",
        question: "CSV files are commonly used for exporting Tanium query data.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "CSV files are widely compatible with spreadsheets.",
        tags: ["reporting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 78,
        domain: "Reporting",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A reporting dashboard is being built.",
        question: "Which elements can dashboards include?",
        answers: [
            "Charts",
            "Tables",
            "Saved question results",
            "SQL server backups"
        ],
        correct: [0, 1, 2],
        explanation: "Dashboards include charts and query results.",
        tags: ["reporting"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 79,
        domain: "Security",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin is reviewing user privileges.",
        question: "Which feature limits which actions a user can perform?",
        answers: [
            "RBAC",
            "Endpoint Sensors",
            "Peer Chains",
            "Saved Questions"
        ],
        correct: 0,
        explanation: "Role-Based Access Control limits user capabilities.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 80,
        domain: "Security",
        type: "true_false",
        difficulty: "medium",
        scenario: "Security auditing.",
        question: "Audit logs can be used to review administrative actions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Audit logs track administrative activities.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 81,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Security best practices review.",
        question: "Which features improve administrative security?",
        answers: [
            "RBAC",
            "Audit logs",
            "Encryption",
            "Peer chains"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC, logging, and encryption enhance security.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 82,
        domain: "Performance",
        type: "true_false",
        difficulty: "easy",
        scenario: "Performance analysis.",
        question: "Endpoint network latency can impact query response time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Network latency affects response speed.",
        tags: ["performance"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 83,
        domain: "Performance",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin analyzes slow results.",
        question: "Which factor is most likely to slow queries?",
        answers: [
            "Complex sensor logic",
            "Dashboard colors",
            "Server theme",
            "Endpoint hostname length"
        ],
        correct: 0,
        explanation: "Complex sensors increase execution time.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 84,
        domain: "Performance",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Investigating query delays.",
        question: "Which elements influence query performance?",
        answers: [
            "Sensor complexity",
            "Network latency",
            "Endpoint count",
            "Dashboard layout"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors, endpoints, and network conditions affect performance.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 85,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A system architect evaluates Tanium infrastructure.",
        question: "Which component aggregates endpoint responses before returning results to the server?",
        answers: [
            "Peer endpoint",
            "Tanium Database",
            "SQL Engine",
            "Dashboard Module"
        ],
        correct: 0,
        explanation: "Peers aggregate results before sending them up the chain.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 86,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding endpoint roles.",
        question: "Every endpoint in a Tanium environment can act as a relay for queries.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints pass queries and responses along the chain.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 87,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Reviewing distributed architecture.",
        question: "Which characteristics define Tanium's architecture?",
        answers: [
            "Peer communication",
            "Distributed processing",
            "Local execution",
            "Centralized scanning"
        ],
        correct: [0, 1, 2],
        explanation: "Tanium relies on distributed peer communication.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 88,
        domain: "Modules",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to distribute software updates.",
        question: "Which module manages software deployment?",
        answers: [
            "Deploy",
            "Reveal",
            "Connect",
            "Discover"
        ],
        correct: 0,
        explanation: "Deploy distributes software packages.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 89,
        domain: "Modules",
        type: "true_false",
        difficulty: "easy",
        scenario: "Module capabilities review.",
        question: "The Discover module helps identify unmanaged devices on the network.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Discover identifies assets that are not yet managed.",
        tags: ["modules"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 90,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoint management review.",
        question: "Which modules help manage endpoint configuration or updates?",
        answers: [
            "Deploy",
            "Patch",
            "Comply",
            "Connect"
        ],
        correct: [0, 1, 2],
        explanation: "Deploy, Patch, and Comply manage endpoints.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 91,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An administrator wants to identify the IP address of endpoints.",
        question: "Which sensor provides the endpoint IP address?",
        answers: [
            "IP Address",
            "Computer Name",
            "Operating System",
            "Network Status"
        ],
        correct: 0,
        explanation: "The IP Address sensor returns the endpoint network address.",
        tags: ["sensors", "network"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 92,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor performance review.",
        question: "Complex sensors can increase query execution time on endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors with complex logic require more execution time.",
        tags: ["sensors", "performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 93,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An operator collects endpoint network information.",
        question: "Which network information can sensors retrieve?",
        answers: [
            "IP address",
            "MAC address",
            "Network adapter details",
            "Firewall vendor contracts"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors can gather network adapter, IP, and MAC details.",
        tags: ["network", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 94,
        domain: "Asking Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to identify endpoints with a specific installed application.",
        question: "Which sensor should be used?",
        answers: [
            "Installed Applications",
            "Running Processes",
            "Operating System",
            "Logged In User"
        ],
        correct: 0,
        explanation: "Installed Applications lists software installed on endpoints.",
        tags: ["queries", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 95,
        domain: "Asking Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Question management review.",
        question: "Questions in Tanium are used to retrieve endpoint information in real time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Questions collect real-time endpoint data through sensors.",
        tags: ["queries"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 96,
        domain: "Asking Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team is designing standardized queries.",
        question: "Which benefits come from using saved questions?",
        answers: [
            "Reusability",
            "Consistency",
            "Easier dashboard integration",
            "Automatic patch deployment"
        ],
        correct: [0, 1, 2],
        explanation: "Saved questions improve reuse and reporting consistency.",
        tags: ["queries", "reporting"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 97,
        domain: "Refining Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to target laptops only.",
        question: "Which filter should be used?",
        answers: [
            "Machine Type equals Laptop",
            "Operating System equals Windows",
            "Hostname contains LAP",
            "CPU Type equals Mobile"
        ],
        correct: 0,
        explanation: "Machine Type helps distinguish laptops from other systems.",
        tags: ["filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 98,
        domain: "Refining Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Query targeting review.",
        question: "Computer groups help limit which endpoints receive a query.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Groups define endpoint scope.",
        tags: ["groups"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 99,
        domain: "Refining Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An organization manages thousands of endpoints.",
        question: "Which advantages come from dynamic groups?",
        answers: [
            "Automatic membership updates",
            "Reduced manual management",
            "Sensor-based targeting",
            "Manual IP assignment"
        ],
        correct: [0, 1, 2],
        explanation: "Dynamic groups automatically adjust membership.",
        tags: ["groups"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 100,
        domain: "Taking Action",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An admin deploys a configuration change.",
        question: "Which feature executes commands across endpoints?",
        answers: [
            "Tanium Actions",
            "Saved Questions",
            "Sensors",
            "Dashboards"
        ],
        correct: 0,
        explanation: "Actions allow administrators to run commands.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 101,
        domain: "Taking Action",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action control review.",
        question: "Action distribution time can reduce the load on the network.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Distribution spreads execution across endpoints.",
        tags: ["actions", "performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 102,
        domain: "Taking Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An action must run safely across many systems.",
        question: "Which controls help manage action execution?",
        answers: [
            "Target computer groups",
            "Start time scheduling",
            "Expiration time",
            "Dashboard permissions"
        ],
        correct: [0, 1, 2],
        explanation: "Actions support targeting, scheduling, and expiration.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 103,
        domain: "Modules",
        type: "single_choice",
        difficulty: "easy",
        scenario: "A security analyst wants endpoint threat investigation tools.",
        question: "Which module provides threat hunting capabilities?",
        answers: [
            "Reveal",
            "Deploy",
            "Connect",
            "Discover"
        ],
        correct: 0,
        explanation: "Reveal provides threat detection and investigation features.",
        tags: ["modules", "security"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 104,
        domain: "Modules",
        type: "true_false",
        difficulty: "medium",
        scenario: "Module functionality review.",
        question: "The Patch module helps automate operating system patch management.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Patch manages operating system updates.",
        tags: ["modules", "patch"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 105,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoint management planning.",
        question: "Which modules help maintain endpoint health?",
        answers: [
            "Patch",
            "Deploy",
            "Comply",
            "Connect"
        ],
        correct: [0, 1, 2],
        explanation: "Patch, Deploy, and Comply manage endpoint health.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 106,
        domain: "Reporting",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An analyst builds visual reports.",
        question: "Which interface is primarily used to visualize Tanium data?",
        answers: [
            "Dashboards",
            "Endpoint Console",
            "Server Terminal",
            "SQL Manager"
        ],
        correct: 0,
        explanation: "Dashboards display query results visually.",
        tags: ["reporting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 107,
        domain: "Reporting",
        type: "true_false",
        difficulty: "easy",
        scenario: "Reporting review.",
        question: "Saved questions can be used as data sources for dashboards.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Dashboards often rely on saved questions.",
        tags: ["reporting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 108,
        domain: "Reporting",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team exports Tanium results.",
        question: "Which formats are commonly used to export data?",
        answers: [
            "CSV",
            "JSON",
            "XML",
            "SQL Backup"
        ],
        correct: [0, 1, 2],
        explanation: "CSV, JSON, and XML are common export formats.",
        tags: ["reporting"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 109,
        domain: "Security",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An administrator needs to control user permissions.",
        question: "Which mechanism enforces user access levels?",
        answers: [
            "RBAC",
            "Peer Chains",
            "Endpoint Sensors",
            "Network Filters"
        ],
        correct: 0,
        explanation: "Role-Based Access Control defines user permissions.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 110,
        domain: "Security",
        type: "true_false",
        difficulty: "medium",
        scenario: "Security monitoring.",
        question: "Audit logs provide records of administrative actions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Audit logs track administrative activities.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 111,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security review is being conducted.",
        question: "Which mechanisms help protect Tanium environments?",
        answers: [
            "RBAC",
            "Audit logging",
            "Data encryption",
            "Dashboard themes"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC, logs, and encryption strengthen security.",
        tags: ["security"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 112,
        domain: "Performance",
        type: "true_false",
        difficulty: "easy",
        scenario: "Performance monitoring.",
        question: "Large endpoint environments benefit from Tanium’s peer-to-peer architecture.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Peer chains allow efficient scaling.",
        tags: ["performance", "architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 113,
        domain: "Performance",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to improve query performance.",
        question: "Which factor should be optimized first?",
        answers: [
            "Sensor efficiency",
            "Dashboard color scheme",
            "Server hostname",
            "Endpoint screen resolution"
        ],
        correct: 0,
        explanation: "Sensor efficiency strongly impacts performance.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 114,
        domain: "Performance",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Query performance is being analyzed.",
        question: "Which elements influence query performance?",
        answers: [
            "Sensor complexity",
            "Network latency",
            "Endpoint count",
            "Dashboard refresh interval"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors, network conditions, and endpoint volume affect speed.",
        tags: ["performance"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 115,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A system architect evaluates communication flow.",
        question: "What allows query responses to travel efficiently back to the server?",
        answers: [
            "Peer aggregation",
            "Direct SQL replication",
            "Endpoint API polling",
            "Dashboard caching"
        ],
        correct: 0,
        explanation: "Peer aggregation passes responses through the chain.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 116,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Chain communication review.",
        question: "Endpoints in Tanium chains help relay queries and responses.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Each endpoint helps propagate queries through the chain.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 117,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Architecture design review.",
        question: "Which characteristics define Tanium’s distributed architecture?",
        answers: [
            "Peer communication",
            "Distributed processing",
            "Local execution of sensors",
            "Centralized vulnerability scanning"
        ],
        correct: [0, 1, 2],
        explanation: "Peer communication and distributed execution define Tanium.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 118,
        domain: "Modules",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A team wants to discover unmanaged assets.",
        question: "Which module identifies devices not currently managed by Tanium?",
        answers: [
            "Discover",
            "Deploy",
            "Reveal",
            "Connect"
        ],
        correct: 0,
        explanation: "Discover identifies unmanaged network assets.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 119,
        domain: "Modules",
        type: "true_false",
        difficulty: "easy",
        scenario: "Module functionality.",
        question: "The Deploy module distributes software packages to endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Deploy is used for software distribution.",
        tags: ["modules"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 120,
        domain: "Modules",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoint lifecycle management.",
        question: "Which modules are commonly used to manage endpoint updates and compliance?",
        answers: [
            "Patch",
            "Comply",
            "Deploy",
            "Connect"
        ],
        correct: [0, 1, 2],
        explanation: "Patch, Comply, and Deploy manage updates and compliance.",
        tags: ["modules"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 121,
        domain: "Interact",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator needs to retrieve the hostname of all endpoints.",
        question: "Which question should be asked in Interact?",
        answers: [
            "Get Computer Name from all machines",
            "Get Installed Applications",
            "Get Running Processes",
            "Get Logged In User"
        ],
        correct: 0,
        explanation: "The Computer Name sensor retrieves the hostname of endpoints.",
        tags: ["interact", "queries", "sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 122,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security analyst wants to identify endpoints running Google Chrome.",
        question: "Which Interact question should be used?",
        answers: [
            "Get Installed Applications contains Google Chrome",
            "Get Chrome Service Status",
            "Get Chrome Process Only",
            "Get Browser Usage History"
        ],
        correct: 0,
        explanation: "Installed Applications returns software installed on endpoints including Chrome.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 123,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "An operator is reviewing query behavior.",
        question: "Questions asked in Interact return results in near real time from endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Tanium queries provide near real-time results through the peer-to-peer architecture.",
        tags: ["interact", "queries"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 124,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An administrator needs information about endpoint operating systems.",
        question: "Which sensors could help identify operating system information?",
        answers: [
            "Operating System",
            "OS Platform",
            "Computer Name",
            "Installed Applications"
        ],
        correct: [0, 1],
        explanation: "Operating System and OS Platform sensors provide OS details.",
        tags: ["interact", "sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 125,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A team needs to retrieve the currently logged in user from endpoints.",
        question: "Which sensor should be used?",
        answers: [
            "Logged In User",
            "Computer Name",
            "Operating System",
            "Local Administrators"
        ],
        correct: 0,
        explanation: "The Logged In User sensor retrieves the current user session information.",
        tags: ["interact", "users"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 126,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs to know which endpoints are currently online.",
        question: "Which sensor should be used?",
        answers: [
            "Online",
            "Computer Name",
            "Last Logged In User",
            "Operating System"
        ],
        correct: 0,
        explanation: "The Online sensor shows endpoint connectivity status.",
        tags: ["interact", "endpoint_status"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 127,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "An operator reviews saved questions.",
        question: "Saved questions can be reused later or integrated into dashboards.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Saved questions improve reuse and reporting integration.",
        tags: ["interact", "saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 128,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An operator wants to refine query results.",
        question: "Which methods can be used to refine questions in Interact?",
        answers: [
            "Apply sensor filters",
            "Use computer groups",
            "Limit endpoints by operating system",
            "Restart the Tanium server"
        ],
        correct: [0, 1, 2],
        explanation: "Filters and groups refine query targeting.",
        tags: ["interact", "filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 129,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A security analyst wants to identify endpoints where a specific file exists.",
        question: "Which sensor should be used?",
        answers: [
            "File Exists",
            "Installed Applications",
            "Running Processes",
            "File Permissions"
        ],
        correct: 0,
        explanation: "The File Exists sensor checks whether a specific file path exists.",
        tags: ["interact", "files"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 130,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs to identify endpoints where Chrome is running as a process.",
        question: "Which question should be used?",
        answers: [
            "Get Running Processes contains chrome.exe",
            "Get Installed Applications contains Chrome",
            "Get Chrome Version",
            "Get Browser History"
        ],
        correct: 0,
        explanation: "Running Processes identifies active processes such as chrome.exe.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 131,
        domain: "Interact",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator needs to retrieve the operating system of all endpoints.",
        question: "Which sensor should be used in Interact?",
        answers: [
            "Operating System",
            "Computer Name",
            "Logged In User",
            "IP Address"
        ],
        correct: 0,
        explanation: "The Operating System sensor returns OS information from endpoints.",
        tags: ["interact", "sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 132,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Query results behavior review.",
        question: "Interact queries continue to collect responses as endpoints respond over time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Results stream back as endpoints respond through the peer chain.",
        tags: ["interact", "queries"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 133,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An operator wants to retrieve system identity information.",
        question: "Which sensors help identify endpoints?",
        answers: [
            "Computer Name",
            "IP Address",
            "Serial Number",
            "Browser History"
        ],
        correct: [0, 1, 2],
        explanation: "Identity sensors include hostname, IP address, and hardware identifiers.",
        tags: ["interact", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 134,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security analyst wants to identify endpoints where PowerShell is currently running.",
        question: "Which Interact query should be used?",
        answers: [
            "Get Running Processes contains powershell.exe",
            "Get Installed Applications contains PowerShell",
            "Get PowerShell Version",
            "Get Windows Features"
        ],
        correct: 0,
        explanation: "Running Processes identifies active processes such as powershell.exe.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 135,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to know which endpoints have Java installed.",
        question: "Which query should be asked?",
        answers: [
            "Get Installed Applications contains Java",
            "Get Running Processes contains java.exe",
            "Get Java Service Status",
            "Get File Exists java.exe"
        ],
        correct: 0,
        explanation: "Installed Applications returns installed software including Java.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 136,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Filtering query results.",
        question: "Sensor filters can be used to narrow the results returned by a query.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters refine queries by restricting returned results.",
        tags: ["interact", "filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 137,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An administrator wants to filter queries to Windows endpoints.",
        question: "Which filters could help identify Windows machines?",
        answers: [
            "Operating System contains Windows",
            "Is Windows equals true",
            "OS Platform equals Windows",
            "Computer Name contains win"
        ],
        correct: [0, 1, 2],
        explanation: "Operating System, Is Windows, and OS Platform can filter Windows endpoints.",
        tags: ["interact", "filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 138,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to retrieve the version of Google Chrome installed on endpoints.",
        question: "Which question should be used?",
        answers: [
            "Get Installed Application Version[Google Chrome]",
            "Get Running Processes contains chrome.exe",
            "Get Browser History",
            "Get Chrome Service Status"
        ],
        correct: 0,
        explanation: "Installed Application Version retrieves the version of installed software.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 139,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs to identify endpoints that have not responded to queries.",
        question: "Which sensor can indicate endpoint availability?",
        answers: [
            "Online",
            "Computer Name",
            "Operating System",
            "Logged In User"
        ],
        correct: 0,
        explanation: "The Online sensor shows whether endpoints are connected.",
        tags: ["interact", "endpoint_status"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 140,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Understanding query scope.",
        question: "Queries in Interact can be limited to specific computer groups.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Computer groups define which endpoints receive the query.",
        tags: ["interact", "groups"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 141,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An operator wants to gather user session information.",
        question: "Which sensors provide user login details?",
        answers: [
            "Logged In User",
            "Last Logged In User",
            "Active Directory User",
            "Computer Name"
        ],
        correct: [0, 1],
        explanation: "Logged In User and Last Logged In User provide session information.",
        tags: ["interact", "users"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 142,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A security team investigates malware that creates a suspicious file.",
        question: "Which query should be used to locate the file across endpoints?",
        answers: [
            "Get File Exists[C:\\Temp\\malware.exe]",
            "Get Installed Applications contains malware",
            "Get Running Processes contains malware.exe",
            "Get Antivirus Version"
        ],
        correct: 0,
        explanation: "File Exists checks if a specific file path exists.",
        tags: ["interact", "files", "security"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 143,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to retrieve endpoint IP addresses.",
        question: "Which sensor should be used?",
        answers: [
            "IP Address",
            "Computer Name",
            "Operating System",
            "Network Domain"
        ],
        correct: 0,
        explanation: "The IP Address sensor returns endpoint IP information.",
        tags: ["interact", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 144,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Sensor usage review.",
        question: "Sensors execute locally on endpoints to gather information.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run locally on endpoints to collect data.",
        tags: ["interact", "sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 145,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An analyst needs system hardware information.",
        question: "Which sensors could provide hardware details?",
        answers: [
            "Serial Number",
            "Manufacturer",
            "Model",
            "Installed Applications"
        ],
        correct: [0, 1, 2],
        explanation: "Serial Number, Manufacturer, and Model provide hardware information.",
        tags: ["interact", "hardware"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 146,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to know which endpoints have Microsoft Office installed.",
        question: "Which query should be used?",
        answers: [
            "Get Installed Applications contains Microsoft Office",
            "Get Running Processes contains office.exe",
            "Get Word Version",
            "Get Office Services"
        ],
        correct: 0,
        explanation: "Installed Applications identifies installed software including Office.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 147,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to check if a specific service is running.",
        question: "Which sensor should be used?",
        answers: [
            "Services",
            "Installed Applications",
            "Running Processes",
            "Operating System"
        ],
        correct: 0,
        explanation: "The Services sensor returns service status information.",
        tags: ["interact", "services"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 148,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query results understanding.",
        question: "Query results may be partial if some endpoints have not responded yet.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints respond asynchronously through the peer chain.",
        tags: ["interact", "queries"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 149,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An administrator refines query results.",
        question: "Which elements can refine Interact queries?",
        answers: [
            "Sensor filters",
            "Computer groups",
            "Operating system filters",
            "Server database queries"
        ],
        correct: [0, 1, 2],
        explanation: "Filters and groups refine the scope of Interact queries.",
        tags: ["interact", "filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 150,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A threat hunter wants to identify endpoints running suspicious scripts.",
        question: "Which query helps detect running scripts?",
        answers: [
            "Get Running Processes contains wscript.exe",
            "Get Installed Applications contains script",
            "Get File Exists script.ps1",
            "Get Operating System"
        ],
        correct: 0,
        explanation: "Running Processes identifies active scripts executed through wscript.",
        tags: ["interact", "security", "processes"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 151,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security analyst needs to identify endpoints where Google Chrome is installed.",
        question: "Which Interact query should be used?",
        answers: [
            "Get Installed Applications contains Google Chrome",
            "Get Running Processes contains chrome.exe",
            "Get Chrome Service Status",
            "Get Browser Usage"
        ],
        correct: 0,
        explanation: "Installed Applications identifies software installed on endpoints.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 152,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs to identify endpoints currently running PowerShell.",
        question: "Which query should be used?",
        answers: [
            "Get Running Processes contains powershell.exe",
            "Get Installed Applications contains PowerShell",
            "Get Windows Features contains PowerShell",
            "Get File Exists powershell.exe"
        ],
        correct: 0,
        explanation: "Running Processes identifies active processes like powershell.exe.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 153,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A threat hunter needs to identify endpoints containing a suspicious file located at C:\\Temp\\malware.exe.",
        question: "Which query should be used?",
        answers: [
            "Get File Exists[C:\\Temp\\malware.exe]",
            "Get Installed Applications contains malware.exe",
            "Get Running Processes contains malware.exe",
            "Get File Permissions malware.exe"
        ],
        correct: 0,
        explanation: "File Exists checks whether a file path exists on endpoints.",
        tags: ["interact", "files", "security"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 154,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An administrator wants to retrieve the version of Google Chrome installed on endpoints.",
        question: "Which query should be used?",
        answers: [
            "Get Installed Application Version[Google Chrome]",
            "Get Installed Applications contains Chrome",
            "Get Chrome Service Status",
            "Get Running Processes contains chrome.exe"
        ],
        correct: 0,
        explanation: "Installed Application Version returns the version number of installed applications.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 155,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An analyst wants to identify endpoints running command shell tools.",
        question: "Which queries could detect command shell activity?",
        answers: [
            "Get Running Processes contains cmd.exe",
            "Get Running Processes contains powershell.exe",
            "Get Installed Applications contains Command Prompt",
            "Get Running Processes contains wscript.exe"
        ],
        correct: [0, 1, 3],
        explanation: "cmd.exe, powershell.exe, and wscript.exe represent active scripting or command execution processes.",
        tags: ["interact", "processes", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 156,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "An operator builds queries using sensors.",
        question: "Sensors can include parameters inside brackets to specify the target application or file.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Many sensors support parameters such as Installed Application Version[Chrome].",
        tags: ["interact", "sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 157,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs to identify endpoints where Microsoft Office is installed.",
        question: "Which query should be used?",
        answers: [
            "Get Installed Applications contains Microsoft Office",
            "Get Running Processes contains office.exe",
            "Get Office Service Status",
            "Get Installed Application Version Office"
        ],
        correct: 0,
        explanation: "Installed Applications identifies installed software.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 158,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A security analyst needs to locate endpoints containing a suspicious executable located in C:\\Windows\\Temp\\evil.exe.",
        question: "Which query should be used?",
        answers: [
            "Get File Exists[C:\\Windows\\Temp\\evil.exe]",
            "Get Running Processes contains evil.exe",
            "Get Installed Applications contains evil",
            "Get Antivirus Version"
        ],
        correct: 0,
        explanation: "File Exists checks if a file exists at the specified path.",
        tags: ["interact", "files", "security"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 159,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to identify endpoints where the Remote Desktop service is running.",
        question: "Which sensor should be used?",
        answers: [
            "Services contains TermService",
            "Installed Applications contains Remote Desktop",
            "Running Processes contains rdp.exe",
            "Operating System contains Windows"
        ],
        correct: 0,
        explanation: "The Services sensor identifies service status such as TermService.",
        tags: ["interact", "services"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 160,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to retrieve the IP address of endpoints.",
        question: "Which query should be used?",
        answers: [
            "Get IP Address",
            "Get Computer Name",
            "Get Operating System",
            "Get Logged In User"
        ],
        correct: 0,
        explanation: "The IP Address sensor retrieves endpoint network addresses.",
        tags: ["interact", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 161,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security analyst wants to detect browsers currently running on endpoints.",
        question: "Which queries could identify running browsers?",
        answers: [
            "Get Running Processes contains chrome.exe",
            "Get Running Processes contains msedge.exe",
            "Get Running Processes contains firefox.exe",
            "Get Installed Applications contains Browser"
        ],
        correct: [0, 1, 2],
        explanation: "Running Processes can detect active browser executables.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 162,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query targeting review.",
        question: "Interact queries can include filters such as 'with Is Windows equals true'.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters allow narrowing queries to specific endpoint characteristics.",
        tags: ["interact", "filters"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 163,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to identify endpoints where Notepad is running.",
        question: "Which query should be used?",
        answers: [
            "Get Running Processes contains notepad.exe",
            "Get Installed Applications contains Notepad",
            "Get File Exists notepad.exe",
            "Get Services contains Notepad"
        ],
        correct: 0,
        explanation: "Running Processes identifies active programs.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 164,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An administrator needs to retrieve the hostname of endpoints.",
        question: "Which query should be used?",
        answers: [
            "Get Computer Name",
            "Get IP Address",
            "Get Operating System",
            "Get Network Adapter"
        ],
        correct: 0,
        explanation: "Computer Name returns endpoint hostnames.",
        tags: ["interact", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 165,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An analyst needs to identify endpoints running scripting engines.",
        question: "Which queries could detect scripting tools?",
        answers: [
            "Get Running Processes contains powershell.exe",
            "Get Running Processes contains cscript.exe",
            "Get Running Processes contains wscript.exe",
            "Get Installed Applications contains Script"
        ],
        correct: [0, 1, 2],
        explanation: "PowerShell, cscript, and wscript are scripting engines.",
        tags: ["interact", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 166,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Query execution review.",
        question: "Interact queries collect data directly from endpoints rather than from a central database.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Queries run sensors on endpoints to collect real-time data.",
        tags: ["interact", "architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 167,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to check whether WinRM service exists.",
        question: "Which query should be used?",
        answers: [
            "Get Services contains WinRM",
            "Get Installed Applications contains WinRM",
            "Get Running Processes contains winrm.exe",
            "Get File Exists winrm.exe"
        ],
        correct: 0,
        explanation: "Services sensor identifies Windows services.",
        tags: ["interact", "services"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 168,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to identify endpoints where Firefox is installed.",
        question: "Which query should be used?",
        answers: [
            "Get Installed Applications contains Mozilla Firefox",
            "Get Running Processes contains firefox.exe",
            "Get Firefox Service Status",
            "Get Browser History Firefox"
        ],
        correct: 0,
        explanation: "Installed Applications returns installed software.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 169,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security analyst investigates suspicious command activity.",
        question: "Which queries could help identify command execution tools?",
        answers: [
            "Get Running Processes contains cmd.exe",
            "Get Running Processes contains powershell.exe",
            "Get Running Processes contains wmic.exe",
            "Get Installed Applications contains Command"
        ],
        correct: [0, 1, 2],
        explanation: "cmd.exe, powershell.exe, and wmic.exe are command-line tools.",
        tags: ["interact", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 170,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A threat hunter needs to locate endpoints where a suspicious script file exists at C:\\Scripts\\backdoor.ps1.",
        question: "Which query should be used?",
        answers: [
            "Get File Exists[C:\\Scripts\\backdoor.ps1]",
            "Get Installed Applications contains backdoor.ps1",
            "Get Running Processes contains backdoor.ps1",
            "Get Script Permissions"
        ],
        correct: 0,
        explanation: "File Exists verifies whether the specified file path exists.",
        tags: ["interact", "files", "security"],
        examWeight: 3,
        shuffleAnswers: true
    },

    {
        id: 171,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst wants to check which endpoints have Java installed.",
        question: "Which query should be used?",
        answers: [
            "Get Installed Applications contains Java",
            "Get Running Processes contains java.exe",
            "Get Java Service Status",
            "Get Java Version"
        ],
        correct: 0,
        explanation: "Installed Applications identifies installed software.",
        tags: ["interact", "applications"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 172,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query results interpretation.",
        question: "Query results may initially appear incomplete while endpoints continue responding.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints return results asynchronously through the peer chain.",
        tags: ["interact", "queries"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 173,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to retrieve the currently logged-in user.",
        question: "Which query should be used?",
        answers: [
            "Get Logged In User",
            "Get Computer Name",
            "Get Operating System",
            "Get IP Address"
        ],
        correct: 0,
        explanation: "Logged In User retrieves current session user information.",
        tags: ["interact", "users"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 174,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst needs to identify endpoints running Windows Update service.",
        question: "Which query should be used?",
        answers: [
            "Get Services contains wuauserv",
            "Get Installed Applications contains Windows Update",
            "Get Running Processes contains update.exe",
            "Get File Exists update.exe"
        ],
        correct: 0,
        explanation: "The Windows Update service is wuauserv.",
        tags: ["interact", "services"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 175,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An analyst investigates suspicious script activity.",
        question: "Which processes may indicate script execution?",
        answers: [
            "powershell.exe",
            "wscript.exe",
            "cscript.exe",
            "explorer.exe"
        ],
        correct: [0, 1, 2],
        explanation: "PowerShell, WScript, and CScript commonly run scripts.",
        tags: ["interact", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 176,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Interact query design.",
        question: "Queries in Interact can include filters to limit results to specific operating systems.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters help refine query targeting.",
        tags: ["interact", "filters"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 177,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to identify endpoints where Edge browser is running.",
        question: "Which query should be used?",
        answers: [
            "Get Running Processes contains msedge.exe",
            "Get Installed Applications contains Edge",
            "Get Browser Version Edge",
            "Get Services contains Edge"
        ],
        correct: 0,
        explanation: "Running Processes detects active browser processes.",
        tags: ["interact", "processes"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 178,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An analyst needs to retrieve the MAC address of endpoints.",
        question: "Which sensor should be used?",
        answers: [
            "MAC Address",
            "Computer Name",
            "Operating System",
            "Logged In User"
        ],
        correct: 0,
        explanation: "MAC Address retrieves hardware network identifiers.",
        tags: ["interact", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 179,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security analyst investigates remote administration tools.",
        question: "Which processes may indicate remote management activity?",
        answers: [
            "powershell.exe",
            "wmic.exe",
            "mstsc.exe",
            "notepad.exe"
        ],
        correct: [0, 1, 2],
        explanation: "PowerShell, WMIC, and MSTSC may be used for remote administration.",
        tags: ["interact", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 180,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A threat hunter needs to find endpoints where a suspicious executable exists in C:\\ProgramData\\badtool.exe.",
        question: "Which query should be used?",
        answers: [
            "Get File Exists[C:\\ProgramData\\badtool.exe]",
            "Get Running Processes contains badtool.exe",
            "Get Installed Applications contains badtool",
            "Get Antivirus Version"
        ],
        correct: 0,
        explanation: "File Exists verifies if a file exists at a specific path.",
        tags: ["interact", "files", "security"],
        examWeight: 3,
        shuffleAnswers: true
    }
]