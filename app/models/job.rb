class Job < ApplicationRecord
  validates :name, :date, :start, :end, presence: true
  belongs_to :truck, optional: true

  def conflicts?(job_date, job_start, job_end)
    return self.date == job_date && (
                        (self.start < job_end && self.start >= job_start) || #overlaps start
                         (self.end <= job_end && self.end > job_start) || #overlaps end
                         (self.start < job_start && self.end > job_end) #fully within
                         )
  end
end
