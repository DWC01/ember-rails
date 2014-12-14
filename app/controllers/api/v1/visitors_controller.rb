class Api::V1::VisitorsController < ApplicationController
  respond_to :json

  def index
    respond_with Visitor.all
  end

  def show
    respond_with visitor
  end

  def create
    respond_with :api, :v1, Visitor.create(visitor_params)
  end

  def update
    respond_with visitor.update(visitor_params)
  end

  def destroy
    respond_with visitor.destroy
  end

  private

  def visitor
    Visitor.find(params[:id])
  end

  def visitor_params
    params.require(:visitor).permit(:first_name, :last_name, :email, :phone, :status, :notes)
  end
  
end