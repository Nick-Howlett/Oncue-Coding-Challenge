class Truck < ApplicationRecord
  validates :name, :avail_start, :avail_end, presence: true
  has_many :jobs

  def self.find_available_truck(job_date, job_start, job_end)
    available_trucks = Truck.where("avail_start <= ? AND avail_end >= ?", job_start, job_end).includes(:jobs)
    available_trucks.each do |truck|
      return truck if truck.jobs.none?{|job| job.conflicts?(job_date, job_start, job_end)}
    end
    nil
  end
end
