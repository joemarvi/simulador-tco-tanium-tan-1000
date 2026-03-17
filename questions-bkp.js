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
];

export const questionBank1 = [

    {
        id: 1,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding Tanium architecture.",
        question: "Tanium uses a linear chain communication model between endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Endpoints communicate in a linear peer-to-peer chain.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 2,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A company wants to understand Tanium scalability.",
        question: "What enables Tanium to scale efficiently across large environments?",
        answers: [
            "Centralized polling",
            "Peer-to-peer communication",
            "Cloud-only architecture",
            "Manual data aggregation"
        ],
        correct: 1,
        explanation: "Peer-to-peer chains reduce load on the server and allow scalability.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 3,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "easy",
        scenario: "An operator is learning about sensors.",
        question: "What is the primary function of a sensor in Tanium?",
        answers: [
            "Execute actions",
            "Collect endpoint data",
            "Store reports",
            "Deploy patches"
        ],
        correct: 1,
        explanation: "Sensors are used to retrieve data from endpoints.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 4,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor behavior understanding.",
        question: "Sensors execute locally on endpoints to gather information.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run on endpoints to collect real-time data.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 5,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator needs quick endpoint data.",
        question: "Which module is used to ask live questions to endpoints?",
        answers: [
            "Deploy",
            "Interact",
            "Connect",
            "Comply"
        ],
        correct: 1,
        explanation: "Interact is used to query endpoints in real time.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 6,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A user is optimizing queries.",
        question: "Which factors improve query efficiency?",
        answers: [
            "Filtering endpoints",
            "Using specific sensors",
            "Querying all endpoints unnecessarily",
            "Limiting result sets"
        ],
        correct: [0, 1, 3],
        explanation: "Filtering and efficient queries reduce load and improve performance.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 7,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding saved questions.",
        question: "Saved questions can be reused without rewriting queries.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Saved questions allow reuse and consistency.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 8,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Managing queries.",
        question: "What is a key benefit of saved questions?",
        answers: [
            "Faster execution",
            "Reusability",
            "Automatic patching",
            "Endpoint reboot"
        ],
        correct: 1,
        explanation: "Saved questions provide reusable queries.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 9,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An admin wants to take action on endpoints.",
        question: "Which feature allows execution of changes on endpoints?",
        answers: [
            "Sensors",
            "Actions",
            "Reports",
            "Groups"
        ],
        correct: 1,
        explanation: "Actions are used to perform changes on endpoints.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 10,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action permissions.",
        question: "All users can deploy actions without restrictions.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Permissions control who can deploy actions.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 11,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Deep architecture understanding.",
        question: "What happens if a node in the chain fails?",
        answers: [
            "Communication stops entirely",
            "Chain reconfigures automatically",
            "Server restarts",
            "All endpoints disconnect"
        ],
        correct: 1,
        explanation: "Tanium automatically reconfigures chains.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 12,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Sensor types.",
        question: "Which are types of sensors?",
        answers: [
            "Fact sensors",
            "Parameter sensors",
            "Action sensors",
            "Derived sensors"
        ],
        correct: [0, 1, 3],
        explanation: "These are valid sensor types.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 13,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Filtering endpoints.",
        question: "Which clause helps limit query scope?",
        answers: [
            "FROM all machines",
            "WITH condition",
            "GROUP BY",
            "SELECT"
        ],
        correct: 1,
        explanation: "WITH clause filters endpoints.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 14,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Managing saved questions.",
        question: "What can be done with saved questions?",
        answers: [
            "Schedule execution",
            "Share with users",
            "Delete permanently",
            "Execute actions automatically"
        ],
        correct: [0, 1, 2],
        explanation: "Saved questions can be scheduled, shared, and deleted.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 15,
        domain: "Actions",
        type: "single_choice",
        difficulty: "easy",
        scenario: "Understanding actions.",
        question: "What is required before deploying an action?",
        answers: [
            "Saved question",
            "Target endpoints",
            "Sensor execution",
            "Dashboard creation"
        ],
        correct: 1,
        explanation: "Actions must target endpoints.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 16,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic architecture knowledge.",
        question: "Tanium requires direct communication between all endpoints and the server.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Endpoints communicate via peers, not directly.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 17,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Sensor execution.",
        question: "When are sensors executed?",
        answers: [
            "During action deployment",
            "When a question is asked",
            "During login",
            "At system startup"
        ],
        correct: 1,
        explanation: "Sensors run when questions are asked.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 18,
        domain: "Interact",
        type: "true_false",
        difficulty: "medium",
        scenario: "Query timing.",
        question: "Tanium queries provide near real-time data.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Queries return near real-time responses.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 19,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Action deployment.",
        question: "Which are components of an action?",
        answers: [
            "Package",
            "Target group",
            "Sensor",
            "Schedule"
        ],
        correct: [0, 1, 3],
        explanation: "Actions require package, targets, and schedule.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 20,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "easy",
        scenario: "Using saved questions.",
        question: "Where are saved questions typically used?",
        answers: [
            "Dashboards",
            "Logs",
            "Policies",
            "Backups"
        ],
        correct: 0,
        explanation: "Saved questions are often used in dashboards.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 21,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Architecture benefits.",
        question: "Which are benefits of Tanium architecture?",
        answers: [
            "Scalability",
            "Low latency",
            "High server load",
            "Efficient bandwidth usage"
        ],
        correct: [0, 1, 3],
        explanation: "Architecture reduces load and improves efficiency.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 22,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Sensor reuse.",
        question: "Sensors can be reused across multiple questions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors are reusable components.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 23,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Efficient querying.",
        question: "What is the best practice when querying endpoints?",
        answers: [
            "Query all endpoints always",
            "Use filters and specific sensors",
            "Avoid saved questions",
            "Use only default sensors"
        ],
        correct: 1,
        explanation: "Filtering improves efficiency.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 24,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action safety.",
        question: "Actions can be scheduled for future execution.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions support scheduling.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 25,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Question management.",
        question: "Who can modify saved questions?",
        answers: [
            "Any user",
            "Only administrators or permitted users",
            "Guests",
            "Endpoints"
        ],
        correct: 1,
        explanation: "Permissions control modifications.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 26,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Sensor design.",
        question: "What should be considered when creating sensors?",
        answers: [
            "Performance impact",
            "Execution time",
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
        question: "Interact allows both live and saved questions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Interact supports both types.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 28,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Action execution.",
        question: "What determines which endpoints run an action?",
        answers: [
            "Sensor type",
            "Target group",
            "User role",
            "Dashboard"
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
        scenario: "Server role.",
        question: "What is the role of Tanium Server?",
        answers: [
            "Execute sensors",
            "Coordinate queries and aggregate data",
            "Install software",
            "Monitor logs only"
        ],
        correct: 1,
        explanation: "Server coordinates communication and aggregation.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 30,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "General concept.",
        question: "Saved questions can be used in reports.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They are commonly used in reporting.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 31,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A Tanium operator needs to identify all Windows 11 endpoints that are currently online.",
        question: "Which is the most efficient question to use?",
        answers: [
            "Get Computer Name from all machines",
            "Get Computer Name from all machines with Operating System contains Windows 11",
            "Get Computer Name from all machines with (Operating System contains Windows 11 and Online equals True)",
            "Get Computer Name from all machines with Online equals True"
        ],
        correct: 2,
        explanation: "Combining OS filter with Online status is the most efficient approach.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 32,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor optimization.",
        question: "Using highly complex sensors can negatively impact endpoint performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Complex sensors increase execution time and resource usage.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 33,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A security team needs to deploy a patch only to affected endpoints.",
        question: "What should be used to limit the scope of the action?",
        answers: [
            "All Machines group",
            "Dynamic targeting based on question results",
            "Manual endpoint selection",
            "Saved sensor only"
        ],
        correct: 1,
        explanation: "Dynamic targeting ensures only relevant endpoints are affected.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 34,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team wants to standardize reporting.",
        question: "Why should saved questions be used?",
        answers: [
            "Consistency in queries",
            "Faster execution",
            "Reusable queries",
            "Automatic endpoint updates"
        ],
        correct: [0, 2],
        explanation: "Saved questions provide consistency and reuse.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 35,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An endpoint in the middle of a chain goes offline.",
        question: "How does Tanium handle this situation?",
        answers: [
            "Stops all communication",
            "Waits for manual intervention",
            "Rebuilds the chain automatically",
            "Restarts the server"
        ],
        correct: 2,
        explanation: "Chains are dynamically reconfigured.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 36,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding filters.",
        question: "Using filters in queries reduces unnecessary data collection.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters limit scope and improve efficiency.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 37,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to reuse logic from another sensor.",
        question: "Which type of sensor should be used?",
        answers: [
            "Fact sensor",
            "Derived sensor",
            "Action sensor",
            "Manual sensor"
        ],
        correct: 1,
        explanation: "Derived sensors reuse other sensor logic.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 38,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action targeting.",
        question: "Actions can be limited to endpoints that match specific query results.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Targeting can be based on query filters.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 39,
        domain: "Interact",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A large enterprise wants to optimize query performance.",
        question: "Which practices should be followed?",
        answers: [
            "Use specific filters",
            "Limit sensors used",
            "Query all endpoints always",
            "Use saved questions"
        ],
        correct: [0, 1, 3],
        explanation: "Efficiency comes from filtering, limiting sensors, and reuse.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 40,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A dashboard relies on consistent data.",
        question: "What ensures consistent query results?",
        answers: [
            "Manual queries",
            "Saved questions",
            "Ad-hoc sensors",
            "Endpoint logs"
        ],
        correct: 1,
        explanation: "Saved questions ensure consistency.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 41,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Understanding action components.",
        question: "What defines an action deployment?",
        answers: [
            "Package",
            "Targeting",
            "Schedule",
            "Sensor output only"
        ],
        correct: [0, 1, 2],
        explanation: "Actions require package, targeting, and scheduling.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 42,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Sensor reuse.",
        question: "A sensor can be used in multiple saved questions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors are reusable across queries.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 43,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Understanding data flow.",
        question: "How are query results returned to the server?",
        answers: [
            "Directly from each endpoint",
            "Through the peer chain",
            "Via email",
            "Using dashboards only"
        ],
        correct: 1,
        explanation: "Responses travel back through the chain.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 44,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator needs to minimize load while querying.",
        question: "Which approach is best?",
        answers: [
            "Run broad queries",
            "Use filters and targeted sensors",
            "Query repeatedly",
            "Avoid saved questions"
        ],
        correct: 1,
        explanation: "Targeted queries reduce load.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 45,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Permissions management.",
        question: "Saved questions can have access restrictions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Permissions control access.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 46,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A patch must run at night.",
        question: "Which feature enables this?",
        answers: [
            "Sensor filtering",
            "Scheduling",
            "Saved questions",
            "Peer chain"
        ],
        correct: 1,
        explanation: "Scheduling allows timed execution.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 47,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Sensor best practices.",
        question: "Which are good sensor design practices?",
        answers: [
            "Keep sensors efficient",
            "Avoid unnecessary processing",
            "Return only needed data",
            "Always use complex scripts"
        ],
        correct: [0, 1, 2],
        explanation: "Efficiency and simplicity are key.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 48,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic understanding.",
        question: "Tanium reduces bandwidth usage through aggregation.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Aggregation reduces network traffic.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 49,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A query needs quick results.",
        question: "What feature ensures fast response times?",
        answers: [
            "Central polling",
            "Peer-to-peer communication",
            "Manual queries",
            "Logs"
        ],
        correct: 1,
        explanation: "Peer chains enable fast results.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 50,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Question usage.",
        question: "Where can saved questions be used?",
        answers: [
            "Dashboards",
            "Reports",
            "Manual queries",
            "Endpoint scripts"
        ],
        correct: [0, 1, 2],
        explanation: "Saved questions are widely reusable.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 51,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution control.",
        question: "Actions can be canceled after deployment.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions can be stopped if needed.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 52,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Performance tuning.",
        question: "What is the biggest risk of poorly designed sensors?",
        answers: [
            "Better performance",
            "Increased endpoint load",
            "Faster queries",
            "Lower accuracy"
        ],
        correct: 1,
        explanation: "Poor sensors increase load.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 53,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Query execution.",
        question: "Interact queries run in real time across endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Queries are near real-time.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 54,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "System design.",
        question: "Which components are part of Tanium architecture?",
        answers: [
            "Tanium Server",
            "Endpoints",
            "Peer chain",
            "Email server"
        ],
        correct: [0, 1, 2],
        explanation: "These are core components.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 55,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Question lifecycle.",
        question: "What happens if a saved question is modified?",
        answers: [
            "It creates a new question automatically",
            "Existing references update",
            "It deletes itself",
            "It stops working"
        ],
        correct: 1,
        explanation: "Changes apply to references.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 56,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Security operation.",
        question: "What is the safest way to deploy a critical action?",
        answers: [
            "Deploy to all endpoints",
            "Test on a small group first",
            "Skip testing",
            "Run immediately everywhere"
        ],
        correct: 1,
        explanation: "Testing reduces risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 57,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Execution scope.",
        question: "Sensors always return the same data regardless of endpoint.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Data varies per endpoint.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 58,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Query optimization.",
        question: "Which approach is least efficient?",
        answers: [
            "Using filters",
            "Using specific sensors",
            "Querying all endpoints without filters",
            "Using saved questions"
        ],
        correct: 2,
        explanation: "Unfiltered queries are inefficient.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 59,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "System resilience.",
        question: "Tanium automatically handles endpoint failures in the chain.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Chains self-heal automatically.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 60,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Action control.",
        question: "What can be configured in an action?",
        answers: [
            "Start time",
            "End time",
            "Target group",
            "Sensor logic"
        ],
        correct: [0, 1, 2],
        explanation: "Actions include timing and targeting.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 61,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A Tanium operator needs to find all endpoints with low disk space on Windows devices only.",
        question: "Which is the most efficient question?",
        answers: [
            "Get Free Disk Space from all machines",
            "Get Free Disk Space from all machines with Is Windows equals True",
            "Get Free Disk Space from all machines with (Is Windows equals True and Free Disk Space < 10 GB)",
            "Get Free Disk Space from all machines with Free Disk Space < 10 GB"
        ],
        correct: 2,
        explanation: "Combining OS filter and condition reduces unnecessary data collection.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 62,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A team is reviewing sensor efficiency.",
        question: "Which factors affect sensor performance?",
        answers: [
            "Script complexity",
            "Execution frequency",
            "Returned data size",
            "Dashboard layout"
        ],
        correct: [0, 1, 2],
        explanation: "Sensor logic and output directly impact performance.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 63,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action targeting.",
        question: "Actions can be restricted to endpoints that are currently online.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Online status can be used as a filter.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 64,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "A report depends on a saved question.",
        question: "What happens if the saved question is deleted?",
        answers: [
            "Report continues normally",
            "Report fails or breaks",
            "New question is created automatically",
            "Endpoints cache results"
        ],
        correct: 1,
        explanation: "Reports depend on saved questions.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 65,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A network administrator analyzes Tanium traffic flow.",
        question: "What is the primary benefit of the linear chain model?",
        answers: [
            "Centralized control",
            "Reduced bandwidth usage",
            "Faster server processing",
            "Direct endpoint-server communication"
        ],
        correct: 1,
        explanation: "Aggregation reduces bandwidth usage.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 66,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic query understanding.",
        question: "Adding multiple filters to a query improves efficiency.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters reduce unnecessary processing.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 67,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants dynamic input in a sensor.",
        question: "Which sensor type supports parameters?",
        answers: [
            "Fact sensor",
            "Parameterized sensor",
            "Derived sensor",
            "Static sensor"
        ],
        correct: 1,
        explanation: "Parameterized sensors accept input values.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 68,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Action deployment planning.",
        question: "What should be considered before deploying an action?",
        answers: [
            "Target scope",
            "Execution time",
            "Potential impact",
            "Dashboard design"
        ],
        correct: [0, 1, 2],
        explanation: "Proper planning avoids issues.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 69,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A query must return results quickly in a large environment.",
        question: "What is the best approach?",
        answers: [
            "Query all endpoints repeatedly",
            "Use targeted filters and minimal sensors",
            "Avoid filters",
            "Use only default questions"
        ],
        correct: 1,
        explanation: "Targeted queries improve performance.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 70,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Usage control.",
        question: "Saved questions can be shared across teams.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Permissions allow sharing.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 71,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "System resilience.",
        question: "What ensures high availability in Tanium?",
        answers: [
            "Chain reconfiguration",
            "Peer redundancy",
            "Manual restart",
            "Distributed communication"
        ],
        correct: [0, 1, 3],
        explanation: "These features ensure resilience.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 72,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic understanding.",
        question: "Sensors execute on the Tanium server.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Sensors execute on endpoints.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 73,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An action must run only once.",
        question: "Which configuration ensures this?",
        answers: [
            "Recurring schedule",
            "Single execution schedule",
            "Continuous deployment",
            "Manual trigger only"
        ],
        correct: 1,
        explanation: "Single execution prevents repetition.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 74,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Efficient query design.",
        question: "Which practices improve query performance?",
        answers: [
            "Using filters",
            "Reducing sensor count",
            "Querying all endpoints",
            "Using saved questions"
        ],
        correct: [0, 1, 3],
        explanation: "Best practices improve efficiency.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 75,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A dashboard relies heavily on saved questions.",
        question: "What is the risk of modifying a saved question?",
        answers: [
            "No impact",
            "All dependent dashboards change",
            "It duplicates automatically",
            "Endpoints restart"
        ],
        correct: 1,
        explanation: "Changes propagate to dependencies.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 76,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic concept.",
        question: "Actions require a package to execute.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Packages define what action does.",
        tags: ["actions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 77,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Sensor output design.",
        question: "What should a sensor return?",
        answers: [
            "All possible data",
            "Relevant and minimal data",
            "Logs only",
            "Random values"
        ],
        correct: 1,
        explanation: "Efficient sensors return only needed data.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 78,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Data flow.",
        question: "Each endpoint sends its response directly to the server.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Responses go through peer chain.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 79,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Query scope.",
        question: "Which clause defines the endpoints targeted?",
        answers: [
            "SELECT",
            "FROM",
            "WITH",
            "GROUP"
        ],
        correct: 2,
        explanation: "WITH clause filters endpoints.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 80,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Usage scenarios.",
        question: "Saved questions can be used for:",
        answers: [
            "Dashboards",
            "Reports",
            "Ad-hoc queries",
            "Endpoint execution"
        ],
        correct: [0, 1, 2],
        explanation: "Saved questions support multiple use cases.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 81,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An action must avoid impacting production systems.",
        question: "What is the best approach?",
        answers: [
            "Deploy globally",
            "Test on small group first",
            "Run immediately",
            "Skip validation"
        ],
        correct: 1,
        explanation: "Testing reduces risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 82,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor behavior.",
        question: "Sensors can return different results depending on endpoint state.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Results vary per endpoint.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 83,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Scaling analysis.",
        question: "What reduces load on the Tanium Server?",
        answers: [
            "Direct polling",
            "Peer-to-peer communication",
            "Manual aggregation",
            "Frequent queries"
        ],
        correct: 1,
        explanation: "Peer model reduces server load.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 84,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic concept.",
        question: "Interact supports real-time data collection.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Queries are near real-time.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 85,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Access control.",
        question: "Who controls access to saved questions?",
        answers: [
            "Endpoints",
            "User roles and permissions",
            "Sensors",
            "Dashboards"
        ],
        correct: 1,
        explanation: "Permissions define access.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 86,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Execution control.",
        question: "What can be configured in an action?",
        answers: [
            "Retry behavior",
            "Timeout",
            "Targeting",
            "Sensor creation"
        ],
        correct: [0, 1, 2],
        explanation: "Execution settings can be configured.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 87,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Advanced design.",
        question: "What is the best way to optimize a slow sensor?",
        answers: [
            "Add more logic",
            "Reduce complexity",
            "Return more data",
            "Run more frequently"
        ],
        correct: 1,
        explanation: "Simplifying improves performance.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 88,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic understanding.",
        question: "Tanium architecture is designed to scale horizontally.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Peer model allows scaling.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 89,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Operator efficiency.",
        question: "What is the best way to reuse complex queries?",
        answers: [
            "Rewrite each time",
            "Use saved questions",
            "Avoid filters",
            "Use logs"
        ],
        correct: 1,
        explanation: "Saved questions enable reuse.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 90,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Data consistency.",
        question: "Saved questions help maintain consistency across teams.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They standardize queries.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 91,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A Tanium operator needs to list all running processes on Linux endpoints that are currently online.",
        question: "Which is the most efficient question?",
        answers: [
            "Get Running Processes from all machines",
            "Get Running Processes from all machines with Is Linux equals True",
            "Get Running Processes from all machines with (Is Linux equals True and Online equals True)",
            "Get Running Processes from all machines with Online equals True"
        ],
        correct: 2,
        explanation: "Combining OS and Online filters ensures efficiency.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 92,
        domain: "Actions",
        type: "multi_select",
        difficulty: "hard",
        scenario: "A critical patch must be deployed safely across production systems.",
        question: "Which best practices should be followed?",
        answers: [
            "Test on a subset of endpoints",
            "Use targeted deployment",
            "Deploy to all endpoints immediately",
            "Schedule during maintenance window"
        ],
        correct: [0, 1, 3],
        explanation: "Testing, targeting, and scheduling reduce risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 93,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Sensor efficiency.",
        question: "Sensors that return excessive data can degrade query performance.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Large outputs increase processing time.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 94,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A shared dashboard depends on multiple saved questions.",
        question: "What is the main risk of deleting one saved question?",
        answers: [
            "No impact",
            "Dashboard data becomes incomplete or fails",
            "New question is generated",
            "Endpoints stop responding"
        ],
        correct: 1,
        explanation: "Dependencies break when a saved question is removed.",
        tags: ["saved_questions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 95,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Understanding data efficiency.",
        question: "Which features reduce network usage in Tanium?",
        answers: [
            "Peer-to-peer communication",
            "Data aggregation",
            "Direct endpoint polling",
            "Efficient filtering"
        ],
        correct: [0, 1, 3],
        explanation: "These features minimize bandwidth usage.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 96,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Query optimization.",
        question: "Filtering endpoints reduces query execution time.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Filters limit scope and improve speed.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 97,
        domain: "Actions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "An operator wants to avoid impacting offline endpoints.",
        question: "Which filter should be applied?",
        answers: [
            "Operating System filter",
            "Online equals True",
            "Group filter only",
            "Sensor type filter"
        ],
        correct: 1,
        explanation: "Online filter ensures only active endpoints are targeted.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 98,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Sensor design review.",
        question: "Which are characteristics of well-designed sensors?",
        answers: [
            "Efficient execution",
            "Minimal output",
            "Relevant data",
            "Complex logic always"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors should be efficient and relevant.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 99,
        domain: "Architecture",
        type: "true_false",
        difficulty: "medium",
        scenario: "Chain behavior.",
        question: "If an endpoint fails, the entire chain fails permanently.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Chains automatically reconfigure.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 100,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "A large query must be optimized.",
        question: "What is the best way to reduce load?",
        answers: [
            "Use broad queries",
            "Use targeted filters and minimal sensors",
            "Increase query frequency",
            "Avoid saved questions"
        ],
        correct: 1,
        explanation: "Targeted queries reduce system load.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 101,
        domain: "Saved Questions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic concept.",
        question: "Saved questions can be used in dashboards.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "They are commonly used in dashboards.",
        tags: ["saved_questions"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 102,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Action execution control.",
        question: "Which options can be configured in an action?",
        answers: [
            "Execution time",
            "Retry logic",
            "Target endpoints",
            "Sensor creation"
        ],
        correct: [0, 1, 2],
        explanation: "Actions include execution settings.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 103,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Sensor execution timing.",
        question: "When is a sensor executed?",
        answers: [
            "During action deployment",
            "When a question is asked",
            "At login",
            "At system boot"
        ],
        correct: 1,
        explanation: "Sensors run when queried.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 104,
        domain: "Architecture",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Data flow optimization.",
        question: "How are results aggregated efficiently?",
        answers: [
            "Direct endpoint responses",
            "Peer chain aggregation",
            "Manual collection",
            "Database polling"
        ],
        correct: 1,
        explanation: "Aggregation happens along the chain.",
        tags: ["architecture"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 105,
        domain: "Interact",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Query best practices.",
        question: "Which practices improve efficiency?",
        answers: [
            "Using filters",
            "Limiting sensors",
            "Querying all endpoints",
            "Using saved questions"
        ],
        correct: [0, 1, 3],
        explanation: "Efficient queries reduce load.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 106,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Question reuse.",
        question: "What is the main benefit of saved questions?",
        answers: [
            "Faster hardware",
            "Reusability",
            "Automatic execution",
            "Endpoint restart"
        ],
        correct: 1,
        explanation: "Saved questions enable reuse.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 107,
        domain: "Actions",
        type: "true_false",
        difficulty: "medium",
        scenario: "Action lifecycle.",
        question: "An action can be stopped after it has started.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions can be canceled.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 108,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Performance troubleshooting.",
        question: "What is the best way to fix a slow sensor?",
        answers: [
            "Add more data collection",
            "Reduce complexity",
            "Increase execution frequency",
            "Duplicate the sensor"
        ],
        correct: 1,
        explanation: "Simplifying improves performance.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 109,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic concept.",
        question: "Tanium architecture reduces the need for direct server communication.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Peer communication reduces direct server load.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 110,
        domain: "Interact",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Efficient targeting.",
        question: "Which clause limits endpoints in a query?",
        answers: [
            "SELECT",
            "WITH",
            "FROM",
            "ORDER"
        ],
        correct: 1,
        explanation: "WITH clause filters endpoints.",
        tags: ["interact"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 111,
        domain: "Saved Questions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Usage scope.",
        question: "Saved questions can be used in:",
        answers: [
            "Dashboards",
            "Reports",
            "Ad-hoc queries",
            "Packages"
        ],
        correct: [0, 1, 2],
        explanation: "They are reusable across multiple features.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 112,
        domain: "Actions",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Production deployment.",
        question: "What is the safest deployment strategy?",
        answers: [
            "Deploy globally immediately",
            "Test on a subset first",
            "Skip validation",
            "Run continuously"
        ],
        correct: 1,
        explanation: "Testing minimizes risk.",
        tags: ["actions"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 113,
        domain: "Sensors",
        type: "true_false",
        difficulty: "medium",
        scenario: "Data variability.",
        question: "Sensor results may differ across endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Results depend on endpoint state.",
        tags: ["sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 114,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Core components.",
        question: "Which are core components of Tanium?",
        answers: [
            "Tanium Server",
            "Endpoints",
            "Peer chain",
            "Email system"
        ],
        correct: [0, 1, 2],
        explanation: "These form the architecture.",
        tags: ["architecture"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 115,
        domain: "Interact",
        type: "true_false",
        difficulty: "easy",
        scenario: "Basic understanding.",
        question: "Interact supports both live and saved questions.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Both types are supported.",
        tags: ["interact"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 116,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Execution planning.",
        question: "Which should be configured in an action?",
        answers: [
            "Start time",
            "End time",
            "Target group",
            "Sensor logic"
        ],
        correct: [0, 1, 2],
        explanation: "Actions require timing and targeting.",
        tags: ["actions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 117,
        domain: "Saved Questions",
        type: "single_choice",
        difficulty: "medium",
        scenario: "Team collaboration.",
        question: "What ensures consistent results across teams?",
        answers: [
            "Manual queries",
            "Saved questions",
            "Logs",
            "Sensors only"
        ],
        correct: 1,
        explanation: "Saved questions standardize queries.",
        tags: ["saved_questions"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 118,
        domain: "Sensors",
        type: "single_choice",
        difficulty: "hard",
        scenario: "Optimization scenario.",
        question: "What is the biggest issue with inefficient sensors?",
        answers: [
            "Improved accuracy",
            "Higher endpoint load",
            "Faster queries",
            "Reduced data"
        ],
        correct: 1,
        explanation: "Inefficient sensors increase load.",
        tags: ["sensors"],
        examWeight: 3,
        shuffleAnswers: true
    },
    {
        id: 119,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "System design.",
        question: "Tanium uses distributed communication to scale.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Distributed model enables scalability.",
        tags: ["architecture"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 120,
        domain: "Interact",
        type: "single_choice",
        difficulty: "hard",
        scenario: "An operator must retrieve data quickly from a subset of endpoints.",
        question: "What is the best approach?",
        answers: [
            "Query all endpoints",
            "Use targeted filters",
            "Avoid sensors",
            "Run multiple queries"
        ],
        correct: 1,
        explanation: "Targeted queries improve speed and efficiency.",
        tags: ["interact"],
        examWeight: 3,
        shuffleAnswers: true
    }

];

