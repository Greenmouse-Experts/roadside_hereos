export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  export const formatName = (string: string, number: number) => {
    if (string.length > number) {
      return string.substring(0, number).concat('...');
    } else return string;
  };
  
  export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };
  
  export const formatNumber = (value: number | string) => {
    if (!value) return '';
    return `${value
      .toLocaleString('en-US')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };
  
  export const formatAsNgnMoney = (value: number | string) => {
    if (!value) return '';
    return `₦${value
      .toLocaleString('en-US')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };
  export const FormatStatus = {
    Active: (
      <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">
        Active
      </p>
    ),
    active: (
      <div className="flex items-center gap-x-2">
        <span className="bg-green-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-green-600">Active</span>
      </div>
    ),
    inactive: (
      <div className="flex items-center gap-x-2">
        <span className="bg-orange-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-orange-600">Inctive</span>
      </div>
    ),
    Deactivate: (
      <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">
        Inactive
      </p>
    ),
    Inactive: (
      <p className="w-28 text-center py-1 fw-500 text-orange-800 bg-orange-100 border border-orange-800 rounded">
        Inactive
      </p>
    ),
    Flag: (
      <p className="w-28 text-center py-1 text-red-800 bg-red-100 border border-red-800 rounded">
        Flagged
      </p>
    ),
    pending: (
      <div className="flex items-center gap-x-2">
        <span className="bg-orange-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-orange-600">Pending</span>
      </div>
    ),
    ongoing: (
      <div className="flex items-center gap-x-2">
        <span className="bg-purple-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-purple-600">Ongoing</span>
      </div>
    ),
    accepted: (
      <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">
        Accepted
      </p>
    ),
    cleared: (
      <p className="w-28 text-center py-1 text-blue-800 bg-blue-100 border border-blue-800 rounded">
        Cleared
      </p>
    ),
    paid: (
      <div className="flex items-center gap-x-2">
        <span className="bg-green-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-green-600">Paid</span>
      </div>
    ),
    approved: (
      <div className="flex items-center gap-x-2">
        <span className="bg-green-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-green-600">Approved</span>
      </div>
    ),
    completed: (
      <div className="flex items-center gap-x-2">
        <span className="bg-green-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-green-600">Completed</span>
      </div>
    ),
    declined: (
      <div className="flex items-center gap-x-2">
        <span className="bg-red-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-red-600">Declined</span>
      </div>
    ),
    confirmed: (
      <div className="flex items-center gap-x-2">
        <span className="bg-green-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-green-600">Confirmed</span>
      </div>
    ),
    cancelled: (
      <div className="flex items-center gap-x-2">
        <span className="bg-red-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-red-600">Cancelled</span>
      </div>
    ),
    failed: (
      <div className="flex items-center gap-x-2">
        <span className="bg-red-600 w-4 h-4 circle"></span>{" "}
        <span className="fw-500 text-red-600">Failed</span>
      </div>
    ),
  };
  
  export const isNumber = (value: string | number) => {
    return typeof value === "number";
  };
  
  export const FilterWords = (words: string[], value: string) => {
    let filtered = value;
    words.forEach((word: string) => {
      filtered = filtered.replace(new RegExp(word, "gi"), ""); // 'gi' for global and case-insensitive matching
    });
    return filtered;
  };

  export const getPageCount = (count: number, limit: number) => {
    const pageCount = Math.ceil(count / limit);
    return pageCount;
  };
  
  export const generatePaginationNumbers = (
    currentPage: number,
    totalPages: number
  ) => {
    const pagesToShow = 4;
    const paginationNumbers = [];
  
    for (let i = 1; i <= Math.min(pagesToShow, totalPages - 2); i++) {
      paginationNumbers.push(i);
    }
    if (currentPage > pagesToShow) {
      paginationNumbers.push("...");
    }
    if (totalPages > pagesToShow) {
      paginationNumbers.push("...");
      for (let i = totalPages - 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }
    }
    return paginationNumbers;
  };

  