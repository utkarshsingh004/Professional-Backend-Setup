class ApiResponse{
    constructor(statusCode, data, meassage = 'Success'){
        this.statusCode=statusCode
        this.data=data
        this.meassage=meassage
        this.success=success
    }
}

export default ApiResponse