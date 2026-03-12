//C:\Users\Colaborador\Desktop\joemarvi\treinamentos\certifications\tanium\simulations\js\questions.js
export const questionBank = [
    {
        id: 1,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Understanding Tanium’s architecture.",
        question: "Tanium uses a peer-to-peer linear chain architecture for endpoint communication.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Tanium endpoints form peer-to-peer chains to distribute queries and responses efficiently.",
        tags: ["architecture", "p2p"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 2,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants to reduce network load during large queries.",
        question: "Which Tanium architectural features reduce network traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated responses",
            "Direct polling from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "Peer chains, aggregation, and filtering minimize network traffic.",
        tags: ["architecture", "scale"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 3,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "easy",
        scenario: "Admin needs hardware inventory.",
        question: "Which sensors provide hardware information?",
        answers: [
            "CPU Info Sensor",
            "Memory Info Sensor",
            "Disk Space Sensor",
            "User Login Sensor"
        ],
        correct: [0, 1, 2],
        explanation: "CPU, Memory, and Disk sensors provide hardware inventory data.",
        tags: ["sensors", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 4,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Querying endpoint data.",
        question: "Sensors execute locally on each endpoint to gather data.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors run on endpoints and return results to Tanium.",
        tags: ["sensors", "endpoint"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 5,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A patch must be deployed automatically.",
        question: "Which features help automate deployment?",
        answers: [
            "Scheduled actions",
            "Pre-deployment testing",
            "Action expiration",
            "Manual user prompts"
        ],
        correct: [0, 1, 2],
        explanation: "Scheduling, testing, and expiration enable automation.",
        tags: ["actions", "automation"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 6,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Deploying Tanium Client to many machines.",
        question: "Which methods can deploy the Tanium Client?",
        answers: [
            "GPO deployment",
            "Manual installation",
            "Deployment tool",
            "Endpoint sensor execution"
        ],
        correct: [0, 1, 2],
        explanation: "GPO, deployment tools, and manual installs are supported.",
        tags: ["deploy", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 7,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A large enterprise requires high availability.",
        question: "Which architecture components support high availability?",
        answers: [
            "Multiple Core Servers",
            "Load balancer",
            "Single server mode",
            "Database replication"
        ],
        correct: [0, 1, 3],
        explanation: "HA requires clustering and load balancing.",
        tags: ["architecture", "ha"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 8,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Security team needs to monitor running software.",
        question: "Which sensors provide process information?",
        answers: [
            "Running Processes Sensor",
            "Installed Applications Sensor",
            "CPU Info Sensor",
            "Service Status Sensor"
        ],
        correct: [0, 3],
        explanation: "Running Processes and Service Status sensors provide runtime service/process data.",
        tags: ["sensors", "process"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 9,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A vulnerability scan identified outdated software.",
        question: "What steps help remediate endpoints?",
        answers: [
            "Deploy patch package",
            "Verify with sensor",
            "Notify users manually",
            "Repeat deployment until compliant"
        ],
        correct: [0, 1, 3],
        explanation: "Deploy, verify, and repeat until compliant.",
        tags: ["patch", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 10,
        domain: "Sensors",
        type: "single",
        difficulty: "easy",
        scenario: "Admin wants OS information.",
        question: "Which sensor retrieves operating system details?",
        answers: [
            "Operating System Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "User Sensor"
        ],
        correct: 0,
        explanation: "The Operating System sensor returns OS details.",
        tags: ["sensors", "os"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 11,
        domain: "Actions",
        type: "single",
        difficulty: "medium",
        scenario: "Admin wants to prevent outdated actions from running.",
        question: "Which feature stops actions after a time period?",
        answers: [
            "Action expiration",
            "Sensor filtering",
            "Chain timeout",
            "Endpoint reboot"
        ],
        correct: 0,
        explanation: "Action expiration prevents old actions from executing.",
        tags: ["actions", "control"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 12,
        domain: "Security",
        type: "single",
        difficulty: "medium",
        scenario: "Restricting access to Tanium modules.",
        question: "Which feature manages user permissions?",
        answers: [
            "RBAC",
            "Peer chains",
            "Sensor scripts",
            "Endpoint isolation"
        ],
        correct: 0,
        explanation: "Role-Based Access Control manages permissions.",
        tags: ["security", "rbac"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 13,
        domain: "Interact",
        type: "single",
        difficulty: "easy",
        scenario: "Admin runs a query in Interact.",
        question: "What does Interact primarily do?",
        answers: [
            "Query endpoints in real time",
            "Deploy patches",
            "Install clients",
            "Create dashboards"
        ],
        correct: 0,
        explanation: "Interact is used to run real-time endpoint queries.",
        tags: ["interact", "query"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 14,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints in remote offices must install Tanium.",
        question: "Which deployment strategy improves success?",
        answers: [
            "Peer relay distribution",
            "Multiple deployment windows",
            "Manual installation",
            "Ignore remote endpoints"
        ],
        correct: [0, 1, 2],
        explanation: "Relays and staged deployments improve reliability.",
        tags: ["deploy", "remote"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 15,
        domain: "Threat Response",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Investigating suspicious processes.",
        question: "Which capability helps identify malicious activity?",
        answers: [
            "Endpoint process data",
            "File hash detection",
            "Sensor queries",
            "Printer monitoring"
        ],
        correct: [0, 1, 2],
        explanation: "Threat Response investigations rely on process, hash, and sensor data.",
        tags: ["security", "threat-response"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 16,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Running scripts across endpoints.",
        question: "Actions allow administrators to execute scripts remotely.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions can execute commands or scripts across endpoints.",
        tags: ["actions", "automation"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 17,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Finding installed applications.",
        question: "Which sensor returns installed software?",
        answers: [
            "Installed Applications Sensor",
            "Running Processes Sensor",
            "CPU Sensor",
            "Disk Sensor"
        ],
        correct: 0,
        explanation: "Installed Applications sensor returns software inventory.",
        tags: ["software", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 18,
        domain: "Sensors",
        type: "single",
        difficulty: "easy",
        scenario: "Checking user login status.",
        question: "Which sensor retrieves currently logged-in users?",
        answers: [
            "Logged-in User Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "Network Adapter Sensor"
        ],
        correct: 0,
        explanation: "Logged-in User sensor identifies active users.",
        tags: ["user", "sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 19,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Prevent accidental action execution.",
        question: "Which mechanism allows validation before large deployments?",
        answers: [
            "Pre-deployment testing",
            "Action approval workflow",
            "Sensor caching",
            "Endpoint reboot"
        ],
        correct: [0, 1],
        explanation: "Testing and approval workflows help prevent accidental deployments.",
        tags: ["actions", "governance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 20,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Limiting administrator privileges.",
        question: "Which RBAC capabilities exist in Tanium?",
        answers: [
            "Role assignment",
            "Permission scopes",
            "User grouping",
            "Endpoint shutdown control"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC controls roles, permissions, and user group assignments.",
        tags: ["security", "rbac"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 21,
        domain: "Deploy",
        type: "single",
        difficulty: "medium",
        scenario: "Deploying Tanium to new region.",
        question: "What reduces deployment bandwidth usage?",
        answers: [
            "Peer relay installation",
            "Deployment scheduling",
            "Manual USB installation",
            "Broadcast install scripts"
        ],
        correct: 0,
        explanation: "Relays and staged scheduling reduce network usage.",
        tags: ["deploy", "bandwidth"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 22,
        domain: "Patch",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Patch compliance reporting.",
        question: "Which components help verify patch compliance?",
        answers: [
            "Patch sensors",
            "Endpoint queries",
            "Action verification",
            "Printer drivers"
        ],
        correct: [0, 1, 2],
        explanation: "Sensors and queries verify patch installation status.",
        tags: ["patch", "compliance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 23,
        domain: "Threat Response",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Investigating malware.",
        question: "Which data types help detect malware?",
        answers: [
            "File hashes",
            "Running processes",
            "Network connections",
            "Mouse movement"
        ],
        correct: [0, 1, 2],
        explanation: "Threat hunting relies on system artifacts like processes and network connections.",
        tags: ["security", "forensics"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 24,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Monitoring disk usage.",
        question: "Which sensors report storage utilization?",
        answers: [
            "Disk Space Sensor",
            "File Count Sensor",
            "CPU Sensor",
            "Network Sensor"
        ],
        correct: 0,
        explanation: "Disk and file sensors measure storage utilization.",
        tags: ["storage", "sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 25,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Action execution.",
        question: "Actions can target only a subset of endpoints using filters.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Actions can be scoped using sensor-based targeting filters.",
        tags: ["actions", "targeting"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 26,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Installing Tanium in restricted networks.",
        question: "Which deployment methods work in restricted network environments?",
        answers: [
            "VPN-based installation",
            "Manual installation",
            "Peer relay distribution",
            "Disable firewall"
        ],
        correct: [0, 1, 2],
        explanation: "VPN access, manual installs, and relay distribution allow deployment in restricted environments.",
        tags: ["deploy", "firewall"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 27,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Protecting administrative access.",
        question: "Which controls improve the security of Tanium servers?",
        answers: [
            "RBAC",
            "Network segmentation",
            "Multi-factor authentication",
            "Printer monitoring"
        ],
        correct: [0, 1, 2],
        explanation: "Access control, segmentation, and MFA strengthen server security.",
        tags: ["security", "server"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 28,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Monitoring network interfaces.",
        question: "Which sensor detects network adapter status?",
        answers: [
            "Network Adapter Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "Memory Sensor"
        ],
        correct: 0,
        explanation: "Network Adapter sensors report network interface configuration and status.",
        tags: ["network", "sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 29,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Updating antivirus signatures.",
        question: "Which steps automate antivirus signature updates across endpoints?",
        answers: [
            "Deploy AV update package",
            "Verify update status using sensors",
            "Schedule recurring actions",
            "Ask users to update manually"
        ],
        correct: [0, 1, 2],
        explanation: "Automated updates require deployment, verification, and scheduling.",
        tags: ["security", "actions"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 30,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Administrators want to monitor endpoint uptime.",
        question: "Which sensor provides system uptime information?",
        answers: [
            "System Uptime Sensor",
            "CPU Usage Sensor",
            "Network Adapter Sensor",
            "Disk Usage Sensor"
        ],
        correct: 0,
        explanation: "System Uptime sensor reports how long the endpoint has been running.",
        tags: ["sensors", "uptime"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 31,
        domain: "Actions",
        type: "single",
        difficulty: "medium",
        scenario: "A configuration script must run across 10,000 endpoints safely.",
        question: "Which safeguard should be applied before large-scale action deployment?",
        answers: [
            "Pre-deployment testing",
            "Targeted endpoint filtering",
            "Action expiration",
            "Disable logging"
        ],
        correct: 0,
        explanation: "Testing, filtering, and expiration help safely control large deployments.",
        tags: ["actions", "deployment", "safety"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 32,
        domain: "Threat Response",
        type: "single",
        difficulty: "medium",
        scenario: "Investigating suspicious files.",
        question: "Which data helps identify malicious files during an investigation?",
        answers: [
            "File hash values",
            "Digital signatures",
            "File path information",
            "Printer queue logs"
        ],
        correct: 0,
        explanation: "Hashes, digital signatures, and file locations help identify malicious files.",
        tags: ["security", "forensics"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 33,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "An administrator wants to track active network connections.",
        question: "Which sensor retrieves active network connections?",
        answers: [
            "Network Connections Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "User Login Sensor"
        ],
        correct: 0,
        explanation: "Network Connections sensors report active endpoint connections.",
        tags: ["sensors", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 34,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Checking endpoint security posture.",
        question: "Which sensors help assess endpoint security posture?",
        answers: [
            "Antivirus Status Sensor",
            "Installed Patches Sensor",
            "Running Processes Sensor",
            "Mouse Activity Sensor"
        ],
        correct: [0, 1, 2],
        explanation: "AV status, patch levels, and running processes provide security insight.",
        tags: ["security", "sensors"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 35,
        domain: "Architecture",
        type: "single",
        difficulty: "medium",
        scenario: "Improving endpoint query performance.",
        question: "Which factor can affect Tanium query performance the most?",
        answers: [
            "Network latency",
            "Endpoint processing power",
            "Peer chain length",
            "Printer driver versions"
        ],
        correct: 0,
        explanation: "Network latency, endpoint resources, and chain topology influence query speed.",
        tags: ["architecture", "performance"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 36,
        domain: "Threat Response",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Analyzing suspicious endpoint behavior.",
        question: "Which indicators may signal a compromised endpoint?",
        answers: [
            "Unknown running processes",
            "Unexpected outbound connections",
            "Unauthorized user logins",
            "Printer driver updates"
        ],
        correct: [0, 1, 2],
        explanation: "Suspicious processes, network activity, and logins are common compromise indicators.",
        tags: ["security", "incident-response"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 37,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Tracking system logins.",
        question: "Which sensor identifies recent login activity on an endpoint?",
        answers: [
            "Last Login Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "Network Sensor"
        ],
        correct: 0,
        explanation: "Last Login sensors report recent authentication activity.",
        tags: ["sensors", "user"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 38,
        domain: "Security",
        type: "single",
        difficulty: "medium",
        scenario: "Auditing administrative actions.",
        question: "Which capability records administrative activity within Tanium?",
        answers: [
            "Audit logs",
            "RBAC policies",
            "Endpoint sensors",
            "Network printers"
        ],
        correct: 0,
        explanation: "Audit logs record administrative actions performed within the platform.",
        tags: ["security", "audit"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 39,
        domain: "Sensors",
        type: "single",
        difficulty: "medium",
        scenario: "Detecting installed services.",
        question: "Which sensor lists services running on an endpoint?",
        answers: [
            "Service Status Sensor",
            "CPU Sensor",
            "Disk Sensor",
            "User Sensor"
        ],
        correct: 0,
        explanation: "Service Status sensors report service configuration and status.",
        tags: ["sensors", "services"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 40,
        domain: "Threat Response",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Investigating possible lateral movement.",
        question: "Which data sources help detect lateral movement between endpoints?",
        answers: [
            "Login events",
            "Network connections",
            "Running processes",
            "Screen brightness settings"
        ],
        correct: [0, 1, 2],
        explanation: "Authentication activity, connections, and processes can reveal lateral movement.",
        tags: ["security", "threat"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 41,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Collecting endpoint data.",
        question: "Sensors can return multiple data fields from endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Sensors can return multiple values depending on their configuration.",
        tags: ["sensors"],
        examWeight: 1,
        shuffleAnswers: true
    },

    {
        id: 42,
        domain: "Threat Response",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Containing an infected endpoint.",
        question: "Which actions help contain malware during an incident response?",
        answers: [
            "Isolate the endpoint from the network",
            "Terminate malicious processes",
            "Deploy a security patch",
            "Restart printer spooler"
        ],
        correct: [0, 1, 2],
        explanation: "Isolation, process termination, and remediation patches help stop malware spread.",
        tags: ["security", "incident-response"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 43,
        domain: "Architecture",
        type: "single",
        difficulty: "medium",
        scenario: "A company manages 50,000 endpoints globally.",
        question: "Which Tanium design principle enables efficient scaling across large environments?",
        answers: [
            "Linear peer communication",
            "Centralized endpoint polling",
            "Direct database queries from endpoints",
            "Single endpoint response channel"
        ],
        correct: 0,
        explanation: "Tanium’s linear chain architecture allows large-scale endpoint communication with minimal server load.",
        tags: ["architecture", "scalability"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 44,
        domain: "Deploy",
        type: "single",
        difficulty: "medium",
        scenario: "Deploying clients to remote branch offices.",
        question: "Which Tanium feature reduces WAN bandwidth usage during client deployment?",
        answers: [
            "Peer relay distribution",
            "Direct server download",
            "Manual installer copy",
            "Disable compression"
        ],
        correct: 0,
        explanation: "Peer relay allows endpoints to distribute installers locally, reducing WAN traffic.",
        tags: ["deploy", "bandwidth"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 45,
        domain: "Actions",
        type: "single",
        difficulty: "medium",
        scenario: "Deploying a cleanup script.",
        question: "Which feature allows administrators to schedule when an action executes?",
        answers: [
            "Scheduled actions",
            "Sensor queries",
            "Peer chains",
            "Endpoint cache"
        ],
        correct: 0,
        explanation: "Scheduled actions allow administrators to define execution timing for scripts or remediation tasks.",
        tags: ["actions", "automation"],
        examWeight: 2,
        shuffleAnswers: true
    },

    {
        id: 46,
        domain: "Security",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Hardening Tanium platform access.",
        question: "Which security controls help protect Tanium infrastructure?",
        answers: [
            "RBAC",
            "TLS encryption",
            "Network segmentation",
            "Disable logging"
        ],
        correct: [0, 1, 2],
        explanation: "RBAC, encrypted communication, and network segmentation improve platform security.",
        tags: ["security", "hardening"],
        examWeight: 2,
        shuffleAnswers: true
    }
];
