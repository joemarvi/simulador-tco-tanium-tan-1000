const questionBank = [
    {
        id: 1,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A global enterprise manages 200,000 endpoints across multiple regions. Administrators want to minimize network congestion during queries.",
        question: "Which statements describe Tanium’s peer-to-peer chain architecture?",
        answers: [
            "Endpoints pass results along the chain",
            "Direct polling of each endpoint by the server",
            "Data aggregation reduces network traffic",
            "Requires broadcast queries for every question"
        ],
        correct: [0, 2],
        explanation: "Tanium’s linear chain architecture aggregates data and reduces traffic by passing results peer-to-peer.",
        tags: ["architecture", "peer-to-peer", "scale"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 2,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Discussing endpoint communication in a midsize deployment.",
        question: "Tanium endpoints always send data directly to the central server first.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Endpoints communicate peer-to-peer first, reducing central server load.",
        tags: ["architecture", "communication"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 3,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator needs to check which software versions are installed across a set of workstations.",
        question: "Which sensor types should be used to gather this information?",
        answers: [
            "Installed Applications Sensor",
            "Running Processes Sensor",
            "File Exists Sensor",
            "Operating System Sensor"
        ],
        correct: [0],
        explanation: "The Installed Applications Sensor specifically queries installed software versions on endpoints.",
        tags: ["sensors", "software", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 4,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "You need to monitor both CPU and memory usage on endpoints.",
        question: "Which sensors can provide this performance information?",
        answers: [
            "CPU Usage Sensor",
            "Disk Usage Sensor",
            "Memory Usage Sensor",
            "Network Interface Sensor"
        ],
        correct: [0, 2],
        explanation: "CPU and Memory Usage Sensors return real-time endpoint performance metrics.",
        tags: ["sensors", "performance"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 5,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A patch needs to be deployed to endpoints, but only during non-business hours.",
        question: "Which features of Tanium Actions allow scheduling deployment?",
        answers: [
            "Scheduled Deployment",
            "Immediate Deployment",
            "Pre-deployment Test",
            "Custom Expiration"
        ],
        correct: [0],
        explanation: "Tanium Actions supports scheduling deployments at specific times to avoid impacting business hours.",
        tags: ["actions", "deployment", "scheduling"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 6,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "Administrators want to deploy software using Tanium Actions.",
        question: "Tanium Actions allows deploying packages without first creating a deployment action.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "All deployments require creating an action; you cannot deploy directly without one.",
        tags: ["actions", "deployment"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 7,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new endpoint has been added to the network and must be included in the Tanium environment.",
        question: "Which steps are necessary to deploy the Tanium Client to this new endpoint?",
        answers: [
            "Run the installer manually on the endpoint",
            "Use Client Deployment tool from the console",
            "Enable peer-to-peer communication",
            "Create a sensor to detect the client"
        ],
        correct: [0, 1],
        explanation: "Deployment can be manual or automated via Tanium Client Deployment tool.",
        tags: ["deploy", "client", "installation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 8,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "hard",
        scenario: "You want to deploy the client across multiple subnets where endpoints are offline at different times.",
        question: "Which strategies can ensure successful deployment?",
        answers: [
            "Scheduled deployment windows",
            "Peer-to-peer client relays",
            "Manual one-by-one installation",
            "Group-based targeting"
        ],
        correct: [0, 1, 3],
        explanation: "Scheduled windows, peer-to-peer relays, and targeting groups improve deployment success across disconnected subnets.",
        tags: ["deploy", "client", "scale"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 9,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "After querying endpoints for a critical patch, some systems are missing the update.",
        question: "Which steps should be taken to remediate endpoints?",
        answers: [
            "Deploy the patch using Actions",
            "Run a sensor to verify patch installation",
            "Reboot all endpoints immediately",
            "Notify users to install manually"
        ],
        correct: [0, 1],
        explanation: "Deploying patches with Actions and verifying with sensors ensures proper remediation.",
        tags: ["take-action", "remediation", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 10,
        domain: "Take Action",
        type: "true_false",
        difficulty: "easy",
        scenario: "An endpoint fails to respond during a Take Action deployment.",
        question: "Tanium automatically retries actions on non-responsive endpoints.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Tanium retries actions on endpoints that did not respond, ensuring higher reliability.",
        tags: ["take-action", "reliability"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 11,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "Your organization is evaluating network traffic impact of Tanium across WAN links.",
        question: "Which factors reduce network impact in Tanium deployments?",
        answers: [
            "Peer-to-peer chaining",
            "Aggregated responses",
            "Polling each endpoint directly from the server",
            "High-frequency queries"
        ],
        correct: [0, 1],
        explanation: "Tanium’s design reduces traffic via P2P chains and aggregation, avoiding excessive polling.",
        tags: ["architecture", "network", "optimization"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 12,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "An admin wants to collect hardware inventory details including CPU, memory, and disk.",
        question: "Which sensors are appropriate for this inventory?",
        answers: [
            "CPU Info Sensor",
            "Memory Info Sensor",
            "Disk Space Sensor",
            "Network Adapter Sensor"
        ],
        correct: [0, 1, 2],
        explanation: "CPU, Memory, and Disk sensors provide the necessary hardware inventory information.",
        tags: ["sensors", "inventory", "hardware"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 13,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A custom script needs to run on endpoints during a patch cycle.",
        question: "Which Tanium features allow safe script execution?",
        answers: [
            "Pre-deployment testing",
            "Scheduled actions",
            "Direct client execution without testing",
            "Action expiration"
        ],
        correct: [0, 1, 3],
        explanation: "Pre-deployment testing, scheduling, and action expiration ensure controlled script execution.",
        tags: ["actions", "scripting", "safety"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 14,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "An administrator must deploy clients to endpoints in multiple AD domains.",
        question: "Which methods support cross-domain client deployment?",
        answers: [
            "Using domain credentials in Deployment tool",
            "Manual installation per domain",
            "Client push via GPO",
            "Sensor-based installation triggers"
        ],
        correct: [0, 1, 2],
        explanation: "Deployment across domains can use credentials in the tool, manual installation, or GPO push.",
        tags: ["deploy", "client", "AD-integration"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 15,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "During a malware outbreak, endpoints need immediate containment.",
        question: "Which actions should be taken in Tanium to respond quickly?",
        answers: [
            "Isolate affected endpoints",
            "Run malware detection sensor",
            "Deploy security patch",
            "Notify users to shut down computers"
        ],
        correct: [0, 1, 2],
        explanation: "Isolation, detection, and patch deployment are the fastest containment measures via Tanium.",
        tags: ["take-action", "security", "malware"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 16,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A global company wants high availability for Tanium Core Server.",
        question: "Which architectural options support high availability?",
        answers: [
            "Deploy multiple Core Servers in a cluster",
            "Use a single Core Server with redundant power",
            "Implement a load balancer",
            "Rely on endpoint caching only"
        ],
        correct: [0, 2],
        explanation: "Clustering Core Servers and using a load balancer ensures high availability, not just redundant power or caching.",
        tags: ["architecture", "high-availability", "core-server"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 17,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "An admin wants to monitor network interface status.",
        question: "The Network Adapter Sensor can detect both up and down status of interfaces.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "The Network Adapter Sensor provides information about interface status including up or down.",
        tags: ["sensors", "network"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 18,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new security patch is released and must be deployed to endpoints without user intervention.",
        question: "Which features facilitate automated patch deployment?",
        answers: [
            "Scheduled Actions",
            "Pre-deployment Testing",
            "Manual User Prompt",
            "Action Expiration"
        ],
        correct: [0, 1, 3],
        explanation: "Automated deployment uses scheduling, testing, and expiration controls to ensure safety and compliance.",
        tags: ["actions", "patching", "automation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 19,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Endpoints in remote offices are behind strict firewalls.",
        question: "Which deployment strategies help ensure client installation succeeds?",
        answers: [
            "Peer-to-peer relay deployment",
            "VPN-based installation",
            "Manual onsite installation",
            "Ignore firewall restrictions"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, VPN deployment, or onsite manual installation allow deployment behind firewalls; ignoring restrictions is not viable.",
        tags: ["deploy", "firewall", "remote-office"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 20,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Some endpoints have outdated antivirus definitions.",
        question: "Which steps can be taken using Tanium to update antivirus definitions?",
        answers: [
            "Deploy antivirus update package",
            "Run sensor to confirm updates",
            "Force user to manually update",
            "Schedule repeated action until updated"
        ],
        correct: [0, 1, 3],
        explanation: "Actions can deploy updates, verify success via sensors, and repeat as needed automatically.",
        tags: ["take-action", "antivirus", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 21,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "The company wants to minimize the impact of Tanium on WAN links.",
        question: "Which architectural features help reduce WAN traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Query all endpoints simultaneously from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering reduce WAN load; simultaneous polling increases traffic.",
        tags: ["architecture", "network", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 22,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "An admin needs to retrieve the last login time and current user on all endpoints.",
        question: "Which sensors should be combined in a query?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "Running Processes Sensor"
        ],
        correct: [0, 1],
        explanation: "Combining Logged-in User and Last Login sensors retrieves both pieces of user session information.",
        tags: ["sensors", "user", "query"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 23,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An administrator wants to run a script immediately on all endpoints.",
        question: "Scheduled actions are required even for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling; scheduling is optional for timing control.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 24,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new office is being set up with 500 endpoints.",
        question: "Which deployment methods allow efficient client installation at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is scalable; manual installation is inefficient at scale.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 25,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "After a vulnerability scan, several endpoints need immediate patching.",
        question: "Which Tanium actions ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a detection sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation across endpoints.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 26,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company with multiple branch offices wants to optimize Tanium performance across WAN links.",
        question: "Which architecture strategies reduce traffic over WAN?",
        answers: [
            "Peer-to-peer chains between endpoints",
            "Aggregated responses before sending to Core Server",
            "Polling every endpoint individually from Core Server",
            "Deploying sensors with filtering options"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and sensor filtering reduce WAN traffic; direct polling increases it.",
        tags: ["architecture", "WAN", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 27,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "An admin needs a list of all installed patches and their status.",
        question: "Which sensors should be used?",
        answers: [
            "Installed Patches Sensor",
            "Operating System Sensor",
            "Running Processes Sensor",
            "Patch Compliance Sensor"
        ],
        correct: [0, 3],
        explanation: "Installed Patches and Patch Compliance sensors provide detailed patch status.",
        tags: ["sensors", "patching", "compliance"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 28,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A security vulnerability is discovered that requires immediate endpoint remediation.",
        question: "Which Tanium Actions capabilities help respond quickly?",
        answers: [
            "Deploy security patch package",
            "Run vulnerability detection sensor",
            "Schedule actions for next month",
            "Isolate endpoints from network"
        ],
        correct: [0, 1, 3],
        explanation: "Immediate patch deployment, detection, and isolation are key for rapid remediation.",
        tags: ["actions", "security", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 29,
        domain: "Deploy",
        type: "multiple",
        difficulty: "hard",
        scenario: "Endpoints in remote locations have intermittent connectivity to the Core Server.",
        question: "Which deployment strategies improve success?",
        answers: [
            "Use peer-to-peer relay deployment",
            "Schedule multiple deployment windows",
            "Deploy manually when endpoints are online",
            "Ignore endpoints until they connect next month"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, scheduled windows, and manual intervention increase deployment success; ignoring endpoints delays deployment.",
        tags: ["deploy", "remote", "connectivity"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 30,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Some endpoints are missing a critical configuration update.",
        question: "Which actions ensure full remediation?",
        answers: [
            "Deploy the configuration package via Actions",
            "Run a sensor to verify installation",
            "Notify users to apply manually",
            "Repeat deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deploying, verifying, and repeating ensures all endpoints are compliant.",
        tags: ["take-action", "configuration", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 31,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Discussing Core Server redundancy.",
        question: "Deploying multiple Core Servers with a load balancer improves availability.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Clustering Core Servers with a load balancer ensures high availability and failover.",
        tags: ["architecture", "high-availability"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 32,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "You want to monitor disk usage and file counts across endpoints.",
        question: "Which sensors provide this data?",
        answers: [
            "Disk Space Sensor",
            "File Count Sensor",
            "CPU Usage Sensor",
            "Memory Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Disk Space and File Count sensors provide detailed storage metrics.",
        tags: ["sensors", "disk", "storage"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 33,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A script needs to run safely on endpoints for configuration changes.",
        question: "Which features of Actions ensure safe execution?",
        answers: [
            "Pre-deployment testing",
            "Scheduled actions",
            "Action expiration",
            "Manual execution without testing"
        ],
        correct: [0, 1, 2],
        explanation: "Testing, scheduling, and expiration controls prevent accidental or unsafe execution.",
        tags: ["actions", "scripting", "safety"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 34,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "You need to deploy the Tanium Client to multiple Active Directory domains.",
        question: "Which methods allow cross-domain deployment?",
        answers: [
            "Using Deployment tool with credentials",
            "Manual installation per domain",
            "GPO push",
            "Sensor-based triggers"
        ],
        correct: [0, 1, 2],
        explanation: "Deployment tool credentials, manual install, and GPO push enable cross-domain installation.",
        tags: ["deploy", "AD", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 35,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A malware outbreak requires immediate containment on endpoints.",
        question: "Which actions ensure quick remediation?",
        answers: [
            "Isolate endpoints",
            "Run malware detection sensor",
            "Deploy security patch",
            "Notify users to shut down devices"
        ],
        correct: [0, 1, 2],
        explanation: "Isolation, detection, and patching are fastest for containment via Tanium Actions.",
        tags: ["take-action", "malware", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 36,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A large company wants to ensure minimal network impact while scaling to hundreds of thousands of endpoints.",
        question: "Which strategies reduce network congestion?",
        answers: [
            "Peer-to-peer response chains",
            "Aggregated endpoint responses",
            "Frequent broadcast queries",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering minimize network traffic; broadcast queries increase congestion.",
        tags: ["architecture", "scale", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 37,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "You need to collect information about logged-in users and their last login time.",
        question: "Which sensors should be used?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Combining Logged-in User and Last Login sensors provides required user session info.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 38,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An admin wants to run a script immediately on all endpoints.",
        question: "Scheduled actions are required even for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling; scheduling is optional for timing control.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 39,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new office with 500 endpoints requires client installation.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual install is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 40,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates identified by a vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 41,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A global enterprise wants high availability for Tanium Core Server.",
        question: "Which architectural options support high availability?",
        answers: [
            "Deploy multiple Core Servers in a cluster",
            "Use a single Core Server with redundant power",
            "Implement a load balancer",
            "Rely on endpoint caching only"
        ],
        correct: [0, 2],
        explanation: "Core Server clustering with a load balancer ensures high availability.",
        tags: ["architecture", "high-availability", "core-server"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 42,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Monitoring network interface status is required.",
        question: "The Network Adapter Sensor detects both up and down status of interfaces.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Network Adapter Sensor reports status accurately, including up or down.",
        tags: ["sensors", "network"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 43,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new security patch must be deployed without user intervention.",
        question: "Which features facilitate automated deployment?",
        answers: [
            "Scheduled Actions",
            "Pre-deployment Testing",
            "Manual User Prompt",
            "Action Expiration"
        ],
        correct: [0, 1, 3],
        explanation: "Scheduling, testing, and expiration ensure automated and safe deployment.",
        tags: ["actions", "automation", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 44,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Endpoints in remote offices are behind strict firewalls.",
        question: "Which deployment strategies improve installation success?",
        answers: [
            "Peer-to-peer relay deployment",
            "VPN-based installation",
            "Manual onsite installation",
            "Ignore firewall restrictions"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, VPN, and manual installation are effective behind firewalls; ignoring restrictions is not feasible.",
        tags: ["deploy", "firewall", "remote-office"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 45,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Endpoints have outdated antivirus definitions.",
        question: "Which steps can Tanium perform to update antivirus definitions?",
        answers: [
            "Deploy antivirus update package",
            "Run sensor to confirm update",
            "Force users to update manually",
            "Schedule repeated action until updated"
        ],
        correct: [0, 1, 3],
        explanation: "Actions deploy updates, verify success via sensors, and repeat automatically if needed.",
        tags: ["take-action", "antivirus", "update"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 46,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A company wants to minimize WAN traffic from Tanium queries.",
        question: "Which features help reduce WAN traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Querying all endpoints simultaneously from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering reduce WAN traffic; simultaneous polling increases it.",
        tags: ["architecture", "WAN", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 47,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Retrieve information about logged-in users and their last login times.",
        question: "Which sensors should be used together?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Combining Logged-in User and Last Login sensors provides required data.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 48,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An administrator runs a script immediately on endpoints.",
        question: "Scheduled actions are mandatory for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling; scheduling is optional.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 49,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Deploy Tanium Client to a new office with 500 endpoints.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual install is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 50,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates after a vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 51,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A global enterprise wants to ensure endpoint queries do not overload network links during business hours.",
        question: "Which architectural strategies help minimize network congestion?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Polling each endpoint individually from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregated responses, and filtering reduce network load; direct polling increases traffic.",
        tags: ["architecture", "network", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 52,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Administrators need to audit installed software and patch levels on endpoints.",
        question: "Which sensors provide this information?",
        answers: [
            "Installed Applications Sensor",
            "Installed Patches Sensor",
            "Running Processes Sensor",
            "Operating System Sensor"
        ],
        correct: [0, 1],
        explanation: "Installed Applications and Installed Patches sensors provide software inventory and patch status.",
        tags: ["sensors", "software", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 53,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A zero-day vulnerability requires immediate action on endpoints.",
        question: "Which Tanium Actions features help respond quickly?",
        answers: [
            "Deploy security patch package",
            "Run vulnerability detection sensor",
            "Schedule actions for next month",
            "Isolate endpoints from network"
        ],
        correct: [0, 1, 3],
        explanation: "Immediate patch deployment, detection, and isolation ensure rapid response.",
        tags: ["actions", "security", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 54,
        domain: "Deploy",
        type: "multiple",
        difficulty: "hard",
        scenario: "Endpoints in branch offices have intermittent connectivity to Core Servers.",
        question: "Which deployment strategies improve success?",
        answers: [
            "Peer-to-peer relay deployment",
            "Schedule multiple deployment windows",
            "Manual deployment when endpoints are online",
            "Ignore endpoints until next month"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, scheduled windows, and manual intervention increase deployment success; ignoring endpoints delays remediation.",
        tags: ["deploy", "remote", "connectivity"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 55,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Some endpoints are missing a critical configuration update.",
        question: "Which steps ensure full remediation using Tanium Actions?",
        answers: [
            "Deploy configuration package",
            "Run a sensor to verify installation",
            "Notify users to apply manually",
            "Repeat deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deploying, verifying, and repeating ensures all endpoints are compliant.",
        tags: ["take-action", "configuration", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 56,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Discussing Core Server redundancy.",
        question: "Clustering multiple Core Servers with a load balancer improves availability.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Clustering Core Servers with a load balancer ensures high availability and failover.",
        tags: ["architecture", "high-availability"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 57,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Administrators need detailed storage metrics, including disk usage and file counts.",
        question: "Which sensors provide this data?",
        answers: [
            "Disk Space Sensor",
            "File Count Sensor",
            "CPU Usage Sensor",
            "Memory Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Disk Space and File Count sensors provide required storage metrics.",
        tags: ["sensors", "disk", "storage"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 58,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A configuration script must be safely executed on endpoints.",
        question: "Which Actions features ensure safe execution?",
        answers: [
            "Pre-deployment testing",
            "Scheduled actions",
            "Action expiration",
            "Manual execution without testing"
        ],
        correct: [0, 1, 2],
        explanation: "Testing, scheduling, and expiration prevent unsafe or accidental execution.",
        tags: ["actions", "scripting", "safety"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 59,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Client installation is needed across multiple AD domains.",
        question: "Which deployment methods support cross-domain installation?",
        answers: [
            "Deployment tool with credentials",
            "Manual installation per domain",
            "GPO push",
            "Sensor-based triggers"
        ],
        correct: [0, 1, 2],
        explanation: "Deployment tool credentials, manual installation, and GPO push enable cross-domain installation.",
        tags: ["deploy", "AD", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 60,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "During a malware outbreak, endpoints must be contained immediately.",
        question: "Which actions ensure quick remediation?",
        answers: [
            "Isolate endpoints",
            "Run malware detection sensor",
            "Deploy security patch",
            "Notify users to shut down devices"
        ],
        correct: [0, 1, 2],
        explanation: "Isolation, detection, and patching are fastest for containment via Tanium Actions.",
        tags: ["take-action", "malware", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 61,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A large enterprise wants to scale Tanium to hundreds of thousands of endpoints without network congestion.",
        question: "Which strategies reduce traffic?",
        answers: [
            "Peer-to-peer response chains",
            "Aggregated endpoint responses",
            "Frequent broadcast queries",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering minimize network traffic; broadcast queries increase congestion.",
        tags: ["architecture", "scale", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 62,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Retrieve information about logged-in users and last login times.",
        question: "Which sensors should be combined?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Logged-in User and Last Login sensors provide complete user session information.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 63,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An administrator runs a script immediately on all endpoints.",
        question: "Scheduled actions are mandatory for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling; scheduling is optional.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 64,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "A new office with 500 endpoints requires client installation.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual installation is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 65,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates after a vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 66,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants to minimize WAN traffic from Tanium queries.",
        question: "Which features help reduce WAN traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Querying all endpoints simultaneously from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering reduce WAN traffic; simultaneous polling increases traffic.",
        tags: ["architecture", "WAN", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 67,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Retrieve logged-in users and last login times.",
        question: "Which sensors should be used together?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Combination of Logged-in User and Last Login sensors provides required data.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 68,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "An admin runs a script immediately on endpoints.",
        question: "Scheduled actions are mandatory for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 69,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Deploy Tanium Client to a new office with 500 endpoints.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual install is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 70,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates identified by vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 71,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "A large enterprise wants high availability for Tanium Core Servers.",
        question: "Which architectural options support high availability?",
        answers: [
            "Deploy multiple Core Servers in a cluster",
            "Use a single Core Server with redundant power",
            "Implement a load balancer",
            "Rely on endpoint caching only"
        ],
        correct: [0, 2],
        explanation: "Core Server clustering with a load balancer ensures high availability.",
        tags: ["architecture", "high-availability", "core-server"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 72,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Monitoring network interface status is required.",
        question: "Network Adapter Sensor detects both up and down status of interfaces.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Network Adapter Sensor reports interface status accurately.",
        tags: ["sensors", "network"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 73,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A security patch must be deployed without user intervention.",
        question: "Which features facilitate automated deployment?",
        answers: [
            "Scheduled Actions",
            "Pre-deployment Testing",
            "Manual User Prompt",
            "Action Expiration"
        ],
        correct: [0, 1, 3],
        explanation: "Scheduling, testing, and expiration ensure automated deployment.",
        tags: ["actions", "automation", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 74,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Endpoints in remote offices are behind strict firewalls.",
        question: "Which deployment strategies improve installation success?",
        answers: [
            "Peer-to-peer relay deployment",
            "VPN-based installation",
            "Manual onsite installation",
            "Ignore firewall restrictions"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, VPN, and manual installation are effective; ignoring restrictions is not viable.",
        tags: ["deploy", "firewall", "remote-office"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 75,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Endpoints have outdated antivirus definitions.",
        question: "Which steps can Tanium perform to update antivirus definitions?",
        answers: [
            "Deploy antivirus update package",
            "Run sensor to confirm update",
            "Force users to update manually",
            "Schedule repeated action until updated"
        ],
        correct: [0, 1, 3],
        explanation: "Actions deploy updates, verify success, and repeat automatically if needed.",
        tags: ["take-action", "antivirus", "update"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 76,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants to ensure minimal network impact while scaling to 500,000 endpoints across multiple regions.",
        question: "Which strategies reduce network traffic in Tanium deployments?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Polling every endpoint directly from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and sensor filtering reduce network traffic; direct polling increases traffic.",
        tags: ["architecture", "scale", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 77,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Administrators need a detailed hardware inventory including CPU, memory, and disk information.",
        question: "Which sensors should be queried?",
        answers: [
            "CPU Info Sensor",
            "Memory Info Sensor",
            "Disk Space Sensor",
            "Network Adapter Sensor"
        ],
        correct: [0, 1, 2],
        explanation: "CPU, Memory, and Disk sensors provide the required hardware inventory data.",
        tags: ["sensors", "hardware", "inventory"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 78,
        domain: "Actions",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A critical vulnerability is discovered and endpoints need immediate action.",
        question: "Which Tanium Actions capabilities help respond effectively?",
        answers: [
            "Deploy patch package",
            "Run vulnerability detection sensor",
            "Schedule actions for next month",
            "Isolate endpoints from network"
        ],
        correct: [0, 1, 3],
        explanation: "Immediate patch deployment, detection, and isolation provide rapid response.",
        tags: ["actions", "security", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 79,
        domain: "Deploy",
        type: "multiple",
        difficulty: "hard",
        scenario: "Remote endpoints have intermittent connectivity to Core Servers and must receive the Tanium Client.",
        question: "Which deployment strategies increase installation success?",
        answers: [
            "Peer-to-peer relay deployment",
            "Schedule multiple deployment windows",
            "Manual installation when endpoints are online",
            "Ignore endpoints until next month"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, scheduled windows, and manual installation increase deployment success; ignoring endpoints delays remediation.",
        tags: ["deploy", "remote", "connectivity"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 80,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Several endpoints are missing a critical configuration update.",
        question: "Which steps ensure full remediation?",
        answers: [
            "Deploy configuration package",
            "Run a sensor to verify installation",
            "Notify users to apply manually",
            "Repeat deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deploying, verifying, and repeating ensures all endpoints are compliant.",
        tags: ["take-action", "configuration", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 81,
        domain: "Architecture",
        type: "true_false",
        difficulty: "easy",
        scenario: "Ensuring Core Server redundancy is required for uptime.",
        question: "Deploying multiple Core Servers with a load balancer improves availability.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Core Server clustering with a load balancer ensures high availability.",
        tags: ["architecture", "high-availability"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 82,
        domain: "Sensors",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Administrators need to track disk space usage and number of files on endpoints.",
        question: "Which sensors provide this data?",
        answers: [
            "Disk Space Sensor",
            "File Count Sensor",
            "CPU Usage Sensor",
            "Memory Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Disk Space and File Count sensors provide storage metrics.",
        tags: ["sensors", "disk", "storage"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 83,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A configuration script must be executed safely on endpoints.",
        question: "Which features of Actions ensure safe execution?",
        answers: [
            "Pre-deployment testing",
            "Scheduled actions",
            "Action expiration",
            "Manual execution without testing"
        ],
        correct: [0, 1, 2],
        explanation: "Testing, scheduling, and expiration prevent unsafe or accidental execution.",
        tags: ["actions", "scripting", "safety"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 84,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Client installation is required across multiple Active Directory domains.",
        question: "Which deployment methods support cross-domain installation?",
        answers: [
            "Deployment tool with credentials",
            "Manual installation per domain",
            "GPO push",
            "Sensor-based triggers"
        ],
        correct: [0, 1, 2],
        explanation: "Deployment tool credentials, manual installation, and GPO push enable cross-domain installation.",
        tags: ["deploy", "AD", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 85,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "During a malware outbreak, endpoints must be isolated and remediated.",
        question: "Which actions ensure rapid containment?",
        answers: [
            "Isolate endpoints",
            "Run malware detection sensor",
            "Deploy security patch",
            "Notify users to shut down devices"
        ],
        correct: [0, 1, 2],
        explanation: "Isolation, detection, and patching are fastest for containment.",
        tags: ["take-action", "malware", "security"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 86,
        domain: "Architecture",
        type: "multiple",
        difficulty: "medium",
        scenario: "The enterprise wants to scale Tanium to 500,000 endpoints without network congestion.",
        question: "Which strategies reduce traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Frequent broadcast queries",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering minimize network traffic; broadcast queries increase congestion.",
        tags: ["architecture", "scale", "network"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 87,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Retrieve logged-in users and last login times.",
        question: "Which sensors should be combined?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Logged-in User and Last Login sensors provide complete session info.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 88,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "A script is executed immediately on endpoints.",
        question: "Scheduled actions are required for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 89,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Deploy Tanium Client to a new office with 500 endpoints.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual installation is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 90,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates after a vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 91,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants high availability for Core Servers.",
        question: "Which architectural options support high availability?",
        answers: [
            "Deploy multiple Core Servers in a cluster",
            "Use a single Core Server with redundant power",
            "Implement a load balancer",
            "Rely on endpoint caching only"
        ],
        correct: [0, 2],
        explanation: "Clustering with a load balancer ensures high availability.",
        tags: ["architecture", "high-availability", "core-server"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 92,
        domain: "Sensors",
        type: "true_false",
        difficulty: "easy",
        scenario: "Network interface status monitoring is required.",
        question: "Network Adapter Sensor detects both up and down interfaces.",
        answers: ["True", "False"],
        correct: 0,
        explanation: "Network Adapter Sensor accurately reports interface status.",
        tags: ["sensors", "network"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 93,
        domain: "Actions",
        type: "multiple",
        difficulty: "medium",
        scenario: "A security patch must be deployed automatically.",
        question: "Which features facilitate automated deployment?",
        answers: [
            "Scheduled Actions",
            "Pre-deployment Testing",
            "Manual User Prompt",
            "Action Expiration"
        ],
        correct: [0, 1, 3],
        explanation: "Scheduling, testing, and expiration ensure automated deployment.",
        tags: ["actions", "automation", "patching"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 94,
        domain: "Deploy",
        type: "multi_select",
        difficulty: "hard",
        scenario: "Remote endpoints are behind strict firewalls.",
        question: "Which deployment strategies improve success?",
        answers: [
            "Peer-to-peer relay deployment",
            "VPN-based installation",
            "Manual onsite installation",
            "Ignore firewall restrictions"
        ],
        correct: [0, 1, 2],
        explanation: "Relays, VPN, and manual installation are effective; ignoring restrictions is not viable.",
        tags: ["deploy", "firewall", "remote-office"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 95,
        domain: "Take Action",
        type: "multiple",
        difficulty: "medium",
        scenario: "Endpoints have outdated antivirus definitions.",
        question: "Which steps can Tanium perform to update antivirus definitions?",
        answers: [
            "Deploy antivirus update package",
            "Run sensor to confirm update",
            "Force users to update manually",
            "Schedule repeated action until updated"
        ],
        correct: [0, 1, 3],
        explanation: "Actions deploy updates, verify success via sensors, and repeat automatically if needed.",
        tags: ["take-action", "antivirus", "update"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 96,
        domain: "Architecture",
        type: "multi_select",
        difficulty: "medium",
        scenario: "A company wants to minimize WAN traffic for endpoint queries.",
        question: "Which features reduce WAN traffic?",
        answers: [
            "Peer-to-peer chains",
            "Aggregated endpoint responses",
            "Query all endpoints simultaneously from Core Server",
            "Sensor filtering"
        ],
        correct: [0, 1, 3],
        explanation: "P2P chains, aggregation, and filtering reduce WAN traffic; simultaneous polling increases it.",
        tags: ["architecture", "WAN", "optimization"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 97,
        domain: "Sensors",
        type: "multiple",
        difficulty: "medium",
        scenario: "Retrieve logged-in users and last login times.",
        question: "Which sensors should be combined?",
        answers: [
            "Logged-in User Sensor",
            "Last Login Sensor",
            "Operating System Sensor",
            "CPU Usage Sensor"
        ],
        correct: [0, 1],
        explanation: "Combining Logged-in User and Last Login sensors provides complete session information.",
        tags: ["sensors", "user", "session"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 98,
        domain: "Actions",
        type: "true_false",
        difficulty: "easy",
        scenario: "A script is executed immediately on endpoints.",
        question: "Scheduled actions are required for immediate execution.",
        answers: ["True", "False"],
        correct: 1,
        explanation: "Immediate actions do not require scheduling.",
        tags: ["actions", "execution"],
        examWeight: 1,
        shuffleAnswers: true
    },
    {
        id: 99,
        domain: "Deploy",
        type: "multiple",
        difficulty: "medium",
        scenario: "Deploy Tanium Client to a new office with 500 endpoints.",
        question: "Which deployment methods are efficient at scale?",
        answers: [
            "Client Deployment tool with group targeting",
            "Manual installation on each endpoint",
            "Peer-to-peer relay installation",
            "GPO-based installation"
        ],
        correct: [0, 2, 3],
        explanation: "Automated deployment via tool, relays, or GPO is efficient; manual installation is impractical.",
        tags: ["deploy", "scale", "client"],
        examWeight: 2,
        shuffleAnswers: true
    },
    {
        id: 100,
        domain: "Take Action",
        type: "multi_select",
        difficulty: "medium",
        scenario: "Endpoints are missing critical updates after a vulnerability scan.",
        question: "Which steps ensure timely remediation?",
        answers: [
            "Deploy patch package",
            "Run a sensor to confirm patch status",
            "Notify users to update manually",
            "Schedule repeated deployment until compliance"
        ],
        correct: [0, 1, 3],
        explanation: "Deployment, verification, and repeated scheduling ensure timely remediation.",
        tags: ["take-action", "patching", "remediation"],
        examWeight: 2,
        shuffleAnswers: true
    }


];