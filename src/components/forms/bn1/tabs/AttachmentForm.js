import React from "react";
import { Form } from "react-bootstrap";

const AttachmentForm = ({ attachmentFile, handleFileChange }) => {
  return (
    <Form>
      <Form.Group controlId="fileUpload" className="mb-3">
        <Form.Label>Upload File</Form.Label>
        <Form.Control
          style={{
            height: "96px",
            width: "100%",
            whiteSpace: "pre-wrap",
          }}
          name="file_upload"
          value={attachmentFile.file_upload}
          onChange={handleFileChange}
          type="file"
        />
        <Form.Text className="text-muted">
          Please upload any necessary attachments here.
        </Form.Text>
      </Form.Group>
    </Form>
  );
};

export default AttachmentForm;
