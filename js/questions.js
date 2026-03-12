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
    }

]