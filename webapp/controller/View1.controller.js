sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment, JSONModel) {
        "use strict";

        return Controller.extend("com.kpo.manageconagreement.controller.View1", {
            onInit: function () {
                let data = [
                        {
                            "Name": "Laurent Dubois",
                            "JobTitle": "Accounts Payable Manager",
                            "Photo": "/images/Laurent_Dubois.png",
                            "Icon": "sap-icon://activity-individual",
                            "JobResponsibilities": "Plans, organizes and manages the operations and activities of an accounts payables.\nSupervises employees and monitors activities.\nFinal check of accounts payable payments and sign off.\nReporting to the head of finance.\n\n\"I am a diligent person. I put great attention to detail.\"",
                            "HireDate": "Date(1371020400000)"
                        },
                        {
                            "Name": "Sabine Mayer",
                            "JobTitle": "Configuration Expert",
                            "Photo": "/images/Sabine_Mayer.png",
                            "Icon": "sap-icon://settings",
                            "JobResponsibilities": "Implementing new Public Cloud ERP Financials system into his company and keeping it aligned with business.\nDuring the initial set-up of an ERP system: Customizing Financial Accounting settings such as organizational  structures, chart of accounts, and tax configuration (as part of implementation projects).\nDuring the ongoing maintenance of the configuration: Adapting the configuration to organizational and  process changes in business.\n\n\"I’m a versatile person. I keep the big picture in mind.\"",
                            "HireDate": "Date(1376290800000)"
                        },
                        {
                            "Name": "Alain Chevalier",
                            "JobTitle": "Credit Analyst",
                            "Photo": "/images/Alain_Chevalier.png",
                            "Icon": "sap-icon://manager-insight",
                            "JobResponsibilities": "Responsible for a high number of accounts (ca. 4000 customers).\nMonitor the credit risk of his customers.\nFocus on changes in his customer’s credit situation.\nRecurring checks on a regular basis.\nDecide on credit blocked sales orders.\nDecide on credit limits for his customers (according the company’s credit policy).\n\n\"I almost always find a pragmatic solution, that’s acceptable for my customers and my company.\"",
                            "HireDate": "Date(1332403200000)"
                        },
                        {
                            "Name": "Monique Legrand",
                            "JobTitle": "GL Accountant",
                            "Photo": "/images/Monique_Legrand.png",
                            "Icon": "sap-icon://account",
                            "JobResponsibilities": "Ensure and adjust correct structuring of company (e.g. chart of accounts, legal/management entities , profit centers etc. …).\nEnsure accuracy of financial data (profit center data).\nExplain financial data for both compliance and management purposes  (Profit center reporting).\nExecute, check, and explain period-end close.\nIdentify root causes of issues on accounts, track and correct these.\n\n\"I am a diligent person. I  put great attention to detail.\"",
                            "HireDate": "Date(1422777600000)"
                        },
                        {
                            "Name": "John Miller",
                            "JobTitle": "GL Accountant",
                            "Photo": "/images/John_Miller.png",
                            "Icon": "sap-icon://account",
                            "JobResponsibilities": "Ensure and adjust correct structuring of company (e.g. chart of accounts, legal/management entities , profit centers etc. …).\nEnsure accuracy of financial data (profit center data).\nExplain financial data for both compliance and management purposes  (Profit center reporting).\nExecute, check, and explain period-end close.\nIdentify root causes of issues on accounts, track and correct these.\n\n\"I am a diligent person. I  put great attention to detail.\"",
                            "HireDate": "Date(1473404400000)"
                        },
                        {
                            "Name": "Richard Wilson",
                            "JobTitle": "Internal Auditor",
                            "Photo": "/images/Richard_Wilson.png",
                            "Icon": "sap-icon://badge",
                            "JobResponsibilities": "Execute the audit (Setup meeting, request documents, do interview, etc.).\nFinish the report (Working papers, findings).\nFollow up action plans.",
                            "HireDate": "Date(1167638400000)"
                        },
                        {
                            "Name": "Julie Armstrong",
                            "JobTitle": "Internal Auditor",
                            "Photo": "/images/Julie_Armstrong.png",
                            "Icon": "sap-icon://badge",
                            "JobResponsibilities": "Execute the audit (Setup meeting, request documents, do interview, etc.).\nFinish the report (Working papers, findings).\nFollow up action plans.",
                            "HireDate": "Date(1272697200000)"
                        },
                        {
                            "Name": "Donna Moore",
                            "JobTitle": "Expense Controller",
                            "Photo": "/images/Donna_Moore.png",
                            "Icon": "sap-icon://employee",
                            "JobResponsibilities": "Keep Organizational Structure updated.\nOrganize and reorganize related objects into groups Keep object information up-to-date as needed.\nMaintain overhead-related structures and objects so costs can be distributed fairly.\nTrigger cost reposting to properly reflect changes that were not made in time.\n\n\"Everything needs to be as efficient as possible and always correct.\"",
                            "HireDate": "Date(920275200000)"
                        },
                        {
                            "Name": "Elena Petrova",
                            "JobTitle": "Accounts Receivable Accountant",
                            "Photo": "/images/Elena_Petrova.png",
                            "Icon": "sap-icon://employee",
                            "JobResponsibilities": "Responsible for a high number of accounts (ca. 5000 customers).\nCentral contact for all internal and external requests for invoice related issues (e.g. manage disputes on invoices, set dunning blocks). (ca. 15-30 calls per day).\nPost-processing of incoming payments; clearing accounts.\nCollect Cash.\nManage accounting related master data of his customers.\n\n\"I am a diligent person. I put great attention to detail.\"",
                            "HireDate": "Date(1354348800000)"
                        }
                    ]

                let tabelmodel = new JSONModel(data);
                this.getView().setModel(tabelmodel, "myModel");
 

            },
            onEngageSubContractor: function () {
                if (!this.EngageSubContractor) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.kpo.manageconagreement.view.fragment.EngageSubcontractor",
                        controller: this
                    }).then(oDialog => {
                        this.EngageSubContractor = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.EngageSubContractor.open()
                }
            },
            onCancel: function () {
                this.EngageSubContractor.close();
            },
        });
    });
