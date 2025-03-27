# -*- encoding: utf-8 -*-
# stub: popper_js 1.16.1 ruby lib

Gem::Specification.new do |s|
  s.name = "popper_js".freeze
  s.version = "1.16.1".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Gleb Mazovetskiy".freeze]
  s.bindir = "exe".freeze
  s.date = "2022-09-18"
  s.description = "Works with Rails out of the box.".freeze
  s.email = ["glex.spb@gmail.com".freeze]
  s.homepage = "https://github.com/glebm/popper_js-rubygem".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Popper.js assets as a Ruby gem. https://popper.js.org/".freeze

  s.installed_by_version = "3.6.3".freeze

  s.specification_version = 4

  s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0".freeze])
  s.add_development_dependency(%q<rake>.freeze, ["~> 13.0".freeze])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0".freeze])
  s.add_development_dependency(%q<rubocop>.freeze, [">= 0".freeze])
end
