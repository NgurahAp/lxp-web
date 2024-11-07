import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { useDetailAssignmentData } from "../../../services/pelatihanku/AssignmentService";
import { useState } from "react";
import { FaUpload, FaFileWord, FaFileImage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PageInfo } from "../../../components/reusable/PageInfo";

export const DetailAssignment = () => {
  const { subjectId, sessionId, assignmentId } = useParams<{
    subjectId: string;
    sessionId: string;
    assignmentId: string;
  }>();

  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return <img src="/penugasan/pdf.png" className="w-1/3" alt="" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-500 text-4xl" />;
      case "jpg":
      case "jpeg":
      case "png":
        return <FaFileImage className="text-green-500 text-4xl" />;
      default:
        return <FaUpload className="text-gray-500 text-4xl" />;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("File:", file);
    console.log("Description:", description);
  };

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

  return (
    <div className="min-h-[85vh] w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-white w-full h-14 flex items-center pl-5 rounded-xl">
        <Link to="/dashboard" className="flex items-center">
          <img
            src="/pelatihanku/home.png"
            className="md:w-6 w-5 -mt-1"
            alt="Home"
          />
          <span className="md:pl-5 pl-3 text-blue-500 md:text-base text-sm font-semibold">
            Beranda
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to="/pelatihanku">
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pelatihan-ku
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/pelatihanku/${subjectId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            {data?.data.detail.subject_name}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <Link to={`/assignment/${subjectId}/${sessionId}`}>
          <span className="text-blue-500 md:text-base text-sm font-semibold">
            Pertemuan {data?.data.detail.session_no}
          </span>
        </Link>
        <FaChevronRight className="text-gray-300 mx-4" />
        <span className="text-gray-400 md:text-base text-sm font-semibold">
          Tugas
        </span>
      </div>
      {/* Assignment Info */}
      <PageInfo
        title={data?.data.assignment.title}
        detail={`Modul ${data?.data.detail.session_no}`}
      />
      {/* Quiz Content */}
      <div className="bg-white mt-5 w-full p-8 h-full rounded-lg">
        <h1 className="font-bold">{data?.data.assignment.title}</h1>
        <p className="pt-5 whitespace-pre-line">{data?.data.assignment.desc}</p>
        <div className="border-b-[1px] border-gray-400 mt-10" />
        {/* Status */}
        <div>
          <h1 className="text-2xl pt-10 font-bold">Penyerahan Berkas</h1>
          <div>
            {/* Description Box */}
            <label
              htmlFor="description"
              className="block text-sm pt-3 font-medium text-gray-700"
            >
              Deskripsi
            </label>
            <textarea
              id="description"
              name="description"
              rows={8}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tulis Deskripsi Disini"
            />
            {/* File Box */}
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Unggah Berkas File
              </label>
              <div className="mt-2 border-2 border-dashed border-gray-300 bg-gray-50 py-3 rounded-md">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".jpg,.png,.pdf,.doc,.docx"
                />

                <label
                  htmlFor="file"
                  className="block text-center h-56 text-gray-500 cursor-pointer"
                >
                  {file ? (
                    <div className="w-1/5">
                      <div className="flex justify-between  mx-3 p-3 border border-gray-200 rounded-t-md bg-white">
                        <p className="font-medium text-gray-700 text-left pr-5">
                          {file.name}
                        </p>

                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className=" text-3xl"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mx-3 h-36 bg-gray-300">
                        <div className="flex items-center justify-center h-full">{getFileIcon(file.name)}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                      <FaUpload className="flex justify-center items-center w-full text-4xl pb-3" />
                      Klik untuk upload atau drag and drop
                      <p className="mt-1 text-xs text-gray-500">
                        Max. File Size: 2MB
                      </p>
                      <div className="flex justify-center pt-5">
                        <div className="flex gap-2 py-2 px-3 text-sm bg-blue-500 text-white rounded-lg items-center justify-center">
                          <CiSearch />
                          Cari File
                        </div>
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-between pt-8">
              <button
                type="button"
                className="px-14 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Batal
              </button>
              <button
                type="button"
                className="px-14 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAssignment;