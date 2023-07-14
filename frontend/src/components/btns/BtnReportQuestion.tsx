import { MdReportGmailerrorred } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { AppDispatch } from "../../store/types";
import { useDispatch } from "react-redux";
import { toggleIsReportQuestionModalOpen } from "../../store/actions/system.actions";

export default function BtnReportQuestion() {
  const dispatch: AppDispatch = useDispatch();
  function handleBtnClick() {
    dispatch(toggleIsReportQuestionModalOpen());
  }
  return (
    <>
      <button
        className="btn-report-question"
        data-tooltip-id="id_123"
        data-tooltip-content="Report a question"
        data-tooltip-place="top"
        onClick={handleBtnClick}
      >
        <MdReportGmailerrorred size={25} />
      </button>
      <Tooltip id="id_123" style={{ fontSize: "16px" }} />
    </>
  );
}
