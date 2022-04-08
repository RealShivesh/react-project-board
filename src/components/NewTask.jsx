import React from 'react';

const NewTask = () => {
  return (
    <>
      <div>
        <h2>New Task</h2>
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
        </form>
      </div>
    </>
  );
};

export default NewTask;
