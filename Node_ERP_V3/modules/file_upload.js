import multer from "multer";
// 폴더(디렉토리), 파일 관련된 기능을 수행하는
// nodejs 기본 기능
import fs from "fs";
import path from "path";

const upload_dir = path.join("public/uploads");
const storageOption = {
  // 파일을 업로드 하기전에 어떤(??) 일을 선행 처리하는 함수
  filename: (req, file, callback) => {
    const originalname = file.originalname;
    const filePrefix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const uploadFileName = `${filePrefix}-${originalname}`;
    callback(null, uploadFileName);
  },

  // 실제 파일을 서버의 upload_dir 폴더에 저장하는 함수
  destination: (req, file, fileUp) => {
    // upload_dir 폴더가 없으면 만들어라
    if (!fs.existsSync(upload_dir)) {
      fs.mkdirSync(upload_dir);
    }
    // 실질적으로 파일 업로드를 담당하는 multer 내부의
    // 함수 호출
    fileUp(null, upload_dir);
  },
};
const storage = multer.diskStorage(storageOption);
const upload = multer({ storage: storage });
export default upload;
