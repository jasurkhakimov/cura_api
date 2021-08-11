class Employees {
	constructor(
		ID,
		bp,
		name,
		postID,
		depID,
		branchID,
		empCode,
		empNCICode,
		username,
		status
	) {
		this.ID = ID;
		this.bp = bp;
		this.name = name;
		this.postID = postID;
		this.depID = depID;
		this.branchID = branchID;
		this.empCode = empCode;
		this.empNCICode = empNCICode;
		this.username = username;
		this.status = status;
	}
}
module.exports = Employees;
