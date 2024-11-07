import { useParams } from "react-router-dom";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { PageInfo } from "../../../components/reusable/PageInfo";
import { Breadcrumb } from "../../../components/reusable/BreadCrumbs";
import { FileUploadForm } from "./components/FileUpload";
import { FinishedAssignment } from "./components/FinishedAssignment";

export const DetailAssignment = () => {
  const { subjectId, sessionId, assignmentId } = useParams<{
    subjectId: string;
    sessionId: string;
    assignmentId: string;
  }>();

  const { data, isLoading, error } = useDetailAssignmentData(
    subjectId,
    sessionId,
    assignmentId
  );

  if (isLoading) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  const breadcrumbItems = [
    {
      label: "Beranda",
      path: "/dashboard",
    },
    {
      label: "Pelatihan-ku",
      path: "/pelatihanku",
    },
    {
      label: data?.data.detail.subject_name,
      path: `/pelatihanku/${subjectId}`,
    },
    {
      label: `Pertemuan ${data?.data.detail.session_no}`,
      path: `/assignment/${subjectId}/${sessionId}`,
    },
    {
      label: "Tugas",
    },
  ];

  const handleSubmit = ({
    description,
    file,
  }: {
    description: string;
    file: File | null;
  }) => {
    console.log("Description:", description);
    console.log("File:", file);
  };

  const handleCancel = () => {
    // Handle cancel logic here
  };

  console.log(data?.data.assignment.progress.status);

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      {/* Assignment Info */}
      <PageInfo
        title={data?.data.assignment.title}
        detail={`Modul ${data?.data.detail.session_no}`}
      />
      {/* Quiz Content */}
      <div className="bg-white mt-5 w-full p-8 h-full rounded-lg">
        <h1 className="font-bold">{data?.data.assignment.title}</h1>
        <p className="pt-5 whitespace-pre-line">{data?.data.assignment.desc}</p>
        <div className="border-b-[1px] border-gray-400 my-10" />
        {/* Status */}
        <FileUploadForm onSubmit={handleSubmit} onCancel={handleCancel} />
        {/* {data?.data.assignment.progress.status === "FINISHED" ? (
          <FinishedAssignment assignmentData={data?.data.assignment} />
        ) : (
          <FileUploadForm onSubmit={handleSubmit} onCancel={handleCancel} />
        )} */}
      </div>
    </div>
  );
};

export default DetailAssignment;
