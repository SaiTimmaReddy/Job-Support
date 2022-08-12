import BaseRequest from './base-request';

class StudentRequest extends BaseRequest {
    getStatusHistory(studentId) {
        return this.performRequest(BaseRequest.METHOD_GET, `histories/${studentId}`);
    }
}

export default new StudentRequest('students');
