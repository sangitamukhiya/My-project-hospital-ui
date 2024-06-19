import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Stack } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImageUpload = () => {
  const [doctorImage, setDoctorImage] = React.useState(null);
  const [localUrl, setLocalUrl] = React.useState("");
  // //   console.log(localUrl);
  const [imageUploadLoading, setImageLoading] = React.useState;

  return (
    <>
      {localUrl && (
        <Stack height="250px">
          <img src={localUrl} alt="" height="100%" />
        </Stack>
      )}

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        choose file
        <VisuallyHiddenInput
          type="file"
          multiple
          onChange={(event) => {
            //   console.log(event.target.files);//values console ma herna ko lagi
            const file = event.target.files[0];
            setDoctorImage(file);

            setLocalUrl(URL.createObjectURL(file));
          }}
        />
      </Button>
    </>
  );
};

export default ImageUpload;
