import { ConcreteReportBuilder } from "./report/ConcreteReportBuilder";

const reportBuilder = new ConcreteReportBuilder();
reportBuilder.produceHeader("Avans", "Avans DevOps", "Sprint 1").produceBody("Sprint 1 150 story points were done.").produceBody("Team members: Jamie Surowiec & Stan Barkmeijer.").produceFooter("1.0.0").producePDF().producePNG();
