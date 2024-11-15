import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function UseFetchCourses() {
  const Fetchqr = async () => {
    return await axios.get(`http://192.168.1.6:3000/enrollment/GetAllCourses`);
  };

  return useQuery({
    queryKey: ["fechCourses"],
    queryFn: Fetchqr,
    refetchOnWindowFocus: false,
  });
}
