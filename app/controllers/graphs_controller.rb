class GraphsController < ApplicationController
  before_action :set_post, :set_user

  def index
    # 20200209 追記

    @graphsdays = @user.posts.order(created_at: "DESC").limit(5).reverse
    # @graphsdays = [2020-02-04,2020-02-04,2020-02-04,2020-02-04,2020-02-04]

    @dayline = Array.new
    @graphsdays.each do |graphday|
      
      @dayline.push(graphday.created_at.strftime('%m/%d').to_s)
      # @dayline.push(graphday)
    
    end
    # @arr = [20200209,20200210,20200211,20200212,20200213]
    # @post = Post.find(params[:post_id])
    # @arr = @post.created_at
    # @arr_json = @arr.to_json.html_safe
    # 20200209 追記

    @graphweights = Post.order(created_at: "DESC").limit(5).reverse
    # @graphweights = [59.5,59,57.5,50,59.5]

    @weightline = Array.new
    @graphweights.each do |graphweight|
    
      @weightline.push(graphweight.weight)
      # @weightline.push(graphweight)
    
    end
    sum = 0
    gon.bardata = []
    gon.linedata = []
    7.times do |i|
      data = rand(100.0)
      gon.bardata << data
      sum = sum + data
      gon.linedata << sum
    end
  end

  def set_post
    # posts = Post.find(user_id: current_user.id)
    @posts = Post.all
  end

  def set_user
    # @user = User.find(params[:user_id])
    @user = User.find(current_user.id)
  end

end
