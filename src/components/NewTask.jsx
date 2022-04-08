import React from 'react';

const NewTask = (newProject) => {
  return (
    <>
      <div>
        <h4>New Task</h4>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div>
            <select className="form-control" id="status">
              <option>Not Started</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTask;
