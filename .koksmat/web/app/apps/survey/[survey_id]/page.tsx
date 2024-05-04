import { Overview } from "../../components/stats";

export default function SurveyDetails(props: {
  params: { survey_id: string };
}) {
  const { survey_id } = props.params;
  return (
    <div>
      <h1>SurveyDetails</h1>
      <Overview />
    </div>
  );
}
